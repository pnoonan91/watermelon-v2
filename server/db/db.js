const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')
console.log('pkg.name: ', pkg.name)

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost/${databaseName}`,
  {
    logging: false
  }
)
module.exports = db
