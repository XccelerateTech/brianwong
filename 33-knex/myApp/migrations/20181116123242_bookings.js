exports.up = function(knex, Promise) {
    return knex.schema.createTable('booking',table=>{
        table.increments();
        table.date('date');
        table.string('remark');
        table.timestamps();
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('booking');
};
