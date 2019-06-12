exports.up = (knex, Promise) => {
  return knex.schema.createTable('themessages', (table) => {
    table.increments()
    table.varchar('name', 255).notNullable()
    table.varchar('message',255).notNullable()
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
};

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('themessages')
