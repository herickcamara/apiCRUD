/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {
      title:'tes',
      description:'Hello wordl',
      dev_time:'24h',
      user_id:1
    },
    {
      title:'test1',
      description:'Hello word 2',
      dev_time:'25h',
      user_id:3
    }
  ]);
};
