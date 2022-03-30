// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database:"tacserverci",
      user:"postgres",
      password:"nanis01"
    },
    migrations:{
      tableName:'knex_migrations',
      directory:`${__dirname}/src/database/migrations`
    },
    seeds:{
      directory:`${__dirname}/src/database/seeds`
    }
  },


};
