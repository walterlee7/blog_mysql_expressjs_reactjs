import { executeQuery, generatePlaceholders } from './config/db';

class Table {
    constructor(tableName) {
        if (!tableName) {
            throw new TypeError('You must pass a MySQL table name into the Table object constructor.');
        }
        this.tableName = tableName;

    }

    insertInstrument(row) {
        console.log(row.length);
        let columns = [];
        if (row.length == 1) {
            columns.push('instrument1');
        } else if (row.length == 2) {
            columns.push('instrument1', 'instrument2');
        } else if (row.length == 3) {
            columns.push('instrument1', 'instrument2', 'instrument3');
        } else {
            console.log('instrument error');
        }

        let values = row;
        let placeholderString = generatePlaceholders(values);
        let sql = `INSERT INTO ${this.tableName} (${columns.join(',')}) VALUES (${placeholderString});`;

        return executeQuery(sql, values)
            .then((results) => (
                { id: results.insertId }
            ));
    }

    insertGenre(row) {
        console.log(row.length);
        let columns = [];
        if (row.length == 1) {
            columns.push('genre1');
        } else if (row.length == 2) {
            columns.push('genre1', 'genre2');
        } else if (row.length == 3) {
            columns.push('genre1', 'genre2', 'genre3');
        } else {
            console.log('genre error');
        }

        let values = row;
        let placeholderString = generatePlaceholders(values);
        let sql = `INSERT INTO ${this.tableName} (${columns.join(',')}) VALUES (${placeholderString});`;

        return executeQuery(sql, values)
            .then((results) => (
                { id: results.insertId }
            ));
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
        let sql = `SELECT * FROM ${this.tableName} WHERE artist_location = ` + "'" + location + "'";
        return executeQuery(sql);
    }

    getInstrument(instrument) {
        let sql = `SELECT * FROM ${this.tableName} WHERE artist_instrument = ` + "'" + instrument + "'";
        return executeQuery(sql);
    }

    getLocationAndInstrument(location, instrument) {
        let sql = `SELECT * FROM ${this.tableName} WHERE (artist_instrument = ` + "'" + instrument + "' " + 'AND artist_location = ' + "'" + location + "')";
        return executeQuery(sql);
    }


    getOne(id) {
        let sql = `SELECT * FROM ${this.tableName} WHERE id = ${id};`;
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