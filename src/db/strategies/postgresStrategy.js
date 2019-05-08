const IDb = require('./base/interfaceDb');
const Sequelize = require('sequelize')
const driver = new Sequelize(
    'heroes',
    'filipesoares',
    'senhasecreta', {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
)

class PostgresStrategy extends IDb {
  constructor() {
    super();
    this._driver = null
    this._herois = null
    this._connect()
  }
  async isConnected() {
    try {
      await this._driver.authenticate()
      return true
    } catch(error) {
      console.log('fail!', error)
      return false
    }
  }
  create(item) {
    return 'Postgres';
  }
  defineModel() {
    this._herois = driver.define('herois', {
      id: {
          type: Sequelize.INTEGER,
          required: true,
          primaryKey: true,
          autoIncrement: true
      },
      nome: {
          type: Sequelize.STRING,
          required: true
      },
      poder: {
          type: Sequelize.STRING,
          required: true
      }
  }, {
      tableName: 'TB_HEROIS',
      freezeTableName: false,
      timestamps: false
  })
  await Herois.sync()
  }
  _connect() {
    this._driver = new Sequelize(
      'heroes',
      'filipesoares',
      'senhasecreta', {
          host: 'localhost',
          dialect: 'postgres',
          quoteIdentifiers: false,
          operatorsAliases: false
      }
  )
  }
}

module.exports = PostgresStrategy;
