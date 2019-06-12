exports.seed = function(knex, Promise) {
// Deletes ALL existing entries
return knex('themessages').del()
 .then(function() {
   // Inserts seed entries
   return knex('themessages').insert([{
       id: 1,
       name: 'Criminal',
       message: 'What are you!?',
       created_at: new Date('2016-06-26 14:26:16 UTC'),
       updated_at: new Date('2016-06-26 14:26:16 UTC')

     },
     {
       id:2,
       name: 'Batman',
       message: 'Im f***ing Batman!!',
       created_at: new Date('2016-06-26 14:26:16 UTC'),
       updated_at: new Date('2016-06-26 14:26:16 UTC')
     }
   ])
   .then(() => {
        return knex.raw(`SELECT setval('themessages_id_seq', (SELECT MAX(id) FROM themessages));`)
      })
 });
};
