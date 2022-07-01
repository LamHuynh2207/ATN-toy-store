var pg_conn = require('./pg_config');
async function deleteAction(id)
{
    const id_query = 
    {
        text: 'delete from products where id = $1',
        values: [id]
    }
    console.log(id_query)
    var query_data = await pg_conn.query(id_query);
}
module.exports = deleteAction