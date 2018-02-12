import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import Table from '../table';
import { encode, decode } from '../utils/tokens';

let usersTable = new Table('users');
let tokensTable = new Table('tokens');

function configurePassport(app) {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        sessions: false
    }, (email, password, done) => {
        usersTable.find({ email })
            .then((results) => {
                // console.log('email: ' + results[0]);
                return results[0];
            }).then((result) => {
                if (result && result.password && result.password === password) {
                    // console.log('result: ' + result);
                    // console.log('password: ' + password);
                    tokensTable.insert({
                        userid: result.id
                    })
                        .then((idObj) => {
                            return encode(idObj.id);
                        }).then((tokenValue) => {
                            return done(null, { token: tokenValue });
                        });
                } else {
                    // console.log('invalid login');
                    return done(null, false, { message: 'Invalid login' });
                }
            }).catch((err) => {
                return done(err);
            });
    }));

    passport.use(new BearerStrategy((token, done) => {
        let tokenId = decode(token);
        if (!tokenId) {
            return done(null, false, { message: 'Invalid token' });
        }
        tokensTable.getOne(tokenId)
            .then((tokenRecord) => {
                return usersTable.getOne(tokenRecord.userid);
            }).then((user) => {
                if (user) {
                    delete user.password;
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid token' });
                }
            }).catch((err) => {
                return done(err);
            });
    }));

    app.use(passport.initialize());
}

export default configurePassport;

