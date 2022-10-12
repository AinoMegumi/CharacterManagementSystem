const mysql = require('mysql');
const fs = require('fs');

module.exports = class {
    /**
     * @param {string} mysqlConfigPath MySQLのコンフィグパス
     */
    constructor(mysqlConfigPath) {
        const config = JSON.parse(fs.readFileSync(mysqlConfigPath));
        this.connection = mysql.createConnection(config);
    }
    /**
     * データベースへ接続する
     * @returns {bool} 接続結果
     */
    connect() {
        let connectResult = true;
        this.connection.connect(er => {
            if (er) {
                console.log('Connection Error: ' + er.stack);
                connectResult = false;
            }
        });
        return connectResult;
    }
    /**
     *
     * @param {string} command
     * @param {function} fn
     */
    query(command) {
        let returnValue = [];
        this.connection.query(command, (er, results, fields) => {
            if (er) {
                console.log(er);
            } else {
                returnValue = results.map(r => fields.map(f => r[f]));
            }
        });
        return returnValue;
    }
};
