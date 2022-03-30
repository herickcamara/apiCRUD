/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('projects', table=>{
    table.increments('id').primary()
    table.string('title').notNullable().unique()
    table.text('description',1000).notNullable()
    table.string('dev_time').notNullable()
    table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')
    table.timestamps(true,true)

  })

}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('projects')
};
