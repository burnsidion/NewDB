exports.up = (knex, Promise) => {
  return knex.schema.createTable('band_bios', (table) => {
    table.increments()
    table.varchar('bandName', 255).notNullable()
    table.varchar('bandLogo', 255).notNullable()
    table.varchar('yearFormed', 255).notNullable().defaultTo('')
    table.varchar('genre', 255).notNullable().defaultTo('')
    table.varchar('bandBio', 4000).notNullable().defaultTo('')
    table.varchar('bandPages', 600).notNullable().defaultTo('')
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
};

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('band_bios')
