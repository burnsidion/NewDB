module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/themessages_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/themessages_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
