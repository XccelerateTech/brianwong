
exports.up = function(knex, Promise) {
    return knex.schema.createTable('note',table=>{
        table.integer('id');
        table.text('text');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('note');
};
