var sql = require('./db');

var Newsletter = function (newsletter) {
    this.email = newsletter.email;
}

Newsletter.create = function (newsletter, result) {
    sql.query("INSERT INTO newsletter set ?", newsletter, function (err, res) {
        if (err) {
            console.log('error:', err);
            result(err, null);
        } else {
            result(null, res.insertId);
        }
    });
}

module.exports = Newsletter;