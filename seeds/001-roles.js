exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('roles')
    .truncate() // resets the PK in additon to cleaning the table
    .then(function() {
      // Inserts seed entries
      return knex('roles').insert([
        { name: 'TA' },
        { name: 'Student' },
        { name: 'Instructors' }
      ]);
    });
};
