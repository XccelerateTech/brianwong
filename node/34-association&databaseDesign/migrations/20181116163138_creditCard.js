
exports.up = function(knex, Promise) {
    return knex.schema.createTable('credit_cards',table=>{
        table.increments();
        table.integer('account_id');
        table.foreign('account_id').references('accounts.id');
        table.date('expire_date')
        table.timestamps(false,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('credit_cards');
};
