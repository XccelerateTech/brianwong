
exports.up = function(knex, Promise) {
    return knex.schema.createTable('transactions',table=>{
        table.increments();
        table.integer('account_id');
        table.foreign('account_id').references('accounts.id');
        table.integer('creditCard_id');
        table.foreign('creditCard_id').references('credit_cards.id');
        table.integer('balance');
        table.timestamps(false,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('transactions');
};
