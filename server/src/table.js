import { executeQuery, generatePlaceholders } from './config/db';

class Table {
    constructor(tableName) {
        if (!tableName) {
            throw new TypeError('You must pass a MySQL table name into the Table object constructor.');
        }
        this.tableName = tableName;

    }

    getRecent(userid) {
        let sql = `SELECT *
        FROM messages msg1
        WHERE msg1.id = (
             SELECT msg2.id
             FROM messages msg2
             WHERE msg2.receiverid = msg1.receiverid
             ORDER BY msg2.id
             LIMIT 1
        )
        group by _created DESC;`;
        return executeQuery(sql);
    }

    updateGenre(row) {
        let columns = Object.keys(row);
        let values = Object.values(row);
        let updates = columns.map((columnName) => {
            return `${columnName} = ?`;
        });
        let delSql = `DELETE FROM ${this.tableName} WHERE userid = ${row.userid};`;
        let sql = `INSERT INTO ${this.tableName} SET ${updates.join(',')}`;
        return executeQuery(delSql)
            .then(() => {
                return executeQuery(sql, values);
            });
    }

    updateInstrument(row) {
        let columns = Object.keys(row);
        let values = Object.values(row);
        let updates = columns.map((columnName) => {
            return `${columnName} = ?`;
        });
        let delSql = `DELETE FROM ${this.tableName} WHERE userid = ${row.userid};`;
        let sql = `INSERT INTO ${this.tableName} SET ${updates.join(',')}`;
        return executeQuery(delSql)
            .then(() => {
                return executeQuery(sql, values);
            });
    }

    getInstruments() {
        let sql = `SELECT instrument_name as label, instrument_name as value FROM ${this.tableName}`;
        return executeQuery(sql);
    }

    getGenre() {
        let sql = `SELECT genre as label, genre as value FROM ${this.tableName}`;
        return executeQuery(sql);
    }

    getLocation(location) {
        let sql = `SELECT users.name, users.location, users.id, users.aboutme FROM ${this.tableName} WHERE location = ` + `"${location}"`;
        return executeQuery(sql);
    }

    getInstrument(instrument) {
        let sql = `SELECT test2.userid, users.name, users.location, users.id, users.aboutme FROM test2 JOIN users ON users.id = test2.userid WHERE Concat(IFNULL(instrument0, ' '), IFNULL(instrument1, ' '), IFNULL(instrument2, ' '), IFNULL(instrument3, ' '), IFNULL(instrument4, ' '), IFNULL(instrument5, ' '), IFNULL(instrument6, ' '), IFNULL(instrument7, ' '), IFNULL(instrument8, ' '), IFNULL(instrument9, ' '), IFNULL(instrument10, ' '), IFNULL(instrument11, ' '), IFNULL(instrument12, ' '), IFNULL(instrument13, ' '), IFNULL(instrument14, ' '), IFNULL(instrument15, ' '), IFNULL(instrument16, ' '), IFNULL(instrument17, ' '), IFNULL(instrument18, ' '), IFNULL(instrument19, ' ')) like ` + "'%" + instrument + "%';";
        return executeQuery(sql);
    }

    getLocationAndInstrument(location, instrument) {
        let sql = `SELECT test2.userid, users.name, users.location, users.id, users.aboutme FROM test2 JOIN users ON users.id = test2.userid WHERE Concat(IFNULL(instrument0, ' '), IFNULL(instrument1, ' '), IFNULL(instrument2, ' '), IFNULL(instrument3, ' '), IFNULL(instrument4, ' '), IFNULL(instrument5, ' '), IFNULL(instrument6, ' '), IFNULL(instrument7, ' '), IFNULL(instrument8, ' '), IFNULL(instrument9, ' '), IFNULL(instrument10, ' '), IFNULL(instrument11, ' '), IFNULL(instrument12, ' '), IFNULL(instrument13, ' '), IFNULL(instrument14, ' '), IFNULL(instrument15, ' '), IFNULL(instrument16, ' '), IFNULL(instrument17, ' '), IFNULL(instrument18, ' '), IFNULL(instrument19, ' ')) like ` + "'%" + instrument + "%' AND users.location = " + "'" + location + "';";
        return executeQuery(sql);
    }

    insertPhoto(row) {
        let columns = Object.keys(row);
        let values = Object.values(row);
        let placeholderString = generatePlaceholders(values);
        let sql = `INSERT INTO ${this.tableName} (${columns.join(',')}) VALUES (${placeholderString});`;
        return executeQuery(sql, values)
            .then((results) => ({ id: results.insertId }));
    }

    updatePhoto(id, row) {
        let columns = Object.keys(row);
        let values = Object.values(row);
        let updates = columns.map((columnName) => {
            return `${columnName} = ?`;
        });
        let sql = `UPDATE ${this.tableName} SET ${updates.join(', ')} WHERE id = ${id};`;
        console.log(sql);
        console.log(values);
        return executeQuery(sql, values);
    }

    getPhoto(id) {
        let sql = `SELECT ${this.tableName}.image FROM ${this.tableName} WHERE id = ${id};`;
        return executeQuery(sql, [id])
            .then((results) => results[0]);
    }

    getOne(id) {
        let sql = `SELECT * FROM ${this.tableName} WHERE id = ${id};`;
        return executeQuery(sql, [id])
            .then((results) => results[0]);
    }

    getUserGenres(id) {
        let sql = `SELECT * FROM ${this.tableName} WHERE userid = ${id};`;
        return executeQuery(sql, [id])
            .then((results) => results[0]);
    }

    getUserInstruments(id) {
        let sql = `SELECT * FROM ${this.tableName} WHERE userid = ${id};`;
        return executeQuery(sql, [id])
            .then((results) => results[0]);
    }

    getAll() {
        let sql = `SELECT * FROM ${this.tableName}`;
        return executeQuery(sql);
    }

    find(query) {
        let columns = Object.keys(query);
        let values = Object.values(query);
        let conditions = columns.map((columnName) => {
            return `${columnName} LIKE ?`;
        });
        let sql = `SELECT * FROM ${this.tableName} WHERE ${conditions.join(' AND ')};`;
        return executeQuery(sql, values);
    }

    insert(row) {
        let columns = Object.keys(row);
        let values = Object.values(row);
        let placeholderString = generatePlaceholders(values);
        let sql = `INSERT INTO ${this.tableName} (${columns.join(',')}) VALUES (${placeholderString});`;
        return executeQuery(sql, values)
            .then((results) => ({ id: results.insertId }));
    }

    update(id, row) {
        let columns = Object.keys(row);
        let values = Object.values(row);
        let updates = columns.map((columnName) => {
            return `${columnName} = ?`;
        });
        let sql = `UPDATE ${this.tableName} SET ${updates.join(',')} WHERE id = ${id};`;
        return executeQuery(sql, values);
    }

    delete(id) {
        let sql = `DELETE FROM ${this.tableName} WHERE id = ${id}`;
        return executeQuery(sql);
    }

    deleteAll() {
        let sql = `DELETE FROM ${this.tableName}`;
        return executeQuery(sql);
    }
}

export default Table;