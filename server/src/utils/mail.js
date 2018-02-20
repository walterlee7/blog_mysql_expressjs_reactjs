import mailgunLoader from 'mailgun-js';
let mailgun = mailgunLoader({ apiKey: process.env.MAILGUN_API_KEY, domain: 'sandbox24a9a9e5dd464839a509f66824e6d87a.mailgun.org' });

function sendEmail(to, from, subject, content) {
    let data = {
        from,
        to,
        subject,
        html: content
    };
    return mailgun.messages().send(data);
}

export { sendEmail };