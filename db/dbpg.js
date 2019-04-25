const db = require('./pgconfig.js')

const getAll = (cb) => {
  // db.pool.query("SELECT * FROM products LIMIT 50", (err, data) => {
  db.pool.query("SELECT * FROM products WHERE productId BETWEEN 30 AND 300 LIMIT 50", (err, data) => {
    if (err) {
      console.log('db pg getAll error')
    } else {
      console.log('db pg getAll success')
      cb(null, data.rows)
    }
  })
}

module.exports = {getAll};

// setup psql on EC2
// https://dzone.com/articles/setting-up-a-postgresql-database-on-an-ubuntu-inst
// https://github.com/snowplow/snowplow/wiki/Setting-up-PostgreSQL

// psql commands:
// https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546