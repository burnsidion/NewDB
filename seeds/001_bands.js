exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('band_bios').del().then(function() {
    // Inserts seed entries
    return knex('band_bios').insert([
      {
        id: 1,
        bandName: 'Death',
        bandLogo:'',
        yearFormed: 1983,
        genre: "Death Metal",
        bandBio: "Death was an American death metal band from Orlando, Florida, founded in 1983 by guitarist and vocalist Chuck Schuldiner. Death is considered to be among the most influential bands in heavy metal and a pioneering force in the extreme metal subgenre of death metal. Their debut album, Scream Bloody Gore, has been widely regarded as the first death metal record (although there is some dispute to that claim as Possessed's debut album Seven Churches and Necrophagia's debut album Season of the Dead were released before). Death had a revolving lineup, with Schuldiner being the sole consistent member. The group's style also progressed, from the raw sound on its first two albums to a more sophisticated one in its later stage. The band ceased to exist after Schuldiner died of glioma and pneumonia in December 2001, but remains an enduring influence on heavy metal.",
        bandPages: '',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }
    ])
    .then(() => {
         return knex.raw(`SELECT setval('band_bios_id_seq', (SELECT MAX(id) FROM band_bios));`)
       })
  });
};
