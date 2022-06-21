const Pool = require('pg').Pool;

const pg_conn = new Pool (
    {
        user: 'ujnbobvrdjgqdn',
        host: 'ec2-52-71-23-11.compute-1.amazonaws.com',
        database: 'd7jbre69ig66ql',
        password: '2ab437ea4bb424c6759acb4c8238267cd6f2180f08968bf9e7fa7459342b3cec',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
        },

    }
);
module.exports = pg_conn;