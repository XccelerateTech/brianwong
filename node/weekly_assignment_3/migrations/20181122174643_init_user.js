
exports.up = function(knex, Promise) {
    return knex.schema.createTable('userlist',table=>{
        table.increments();
        table.string('username');
        table.string('password');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
};
