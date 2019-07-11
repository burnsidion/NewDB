module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/bands_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/bands_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
