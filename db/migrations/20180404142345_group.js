
exports.up = function(knex, Promise) {
  
    return knex.schema.createTable('groups',function(table){

        table.increments();
        table.string('group_name').notNullable();
        table.enu('status', ['active','inactive']).defaultTo('active');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

    }).createTable('creditors',function(table){
        table.increments();
        table.string('creditor_name').notNullable();
        table.enu('status', ['active','inactive']).defaultTo('active')
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

    }).createTable('debitors',function(table){
        table.increments();
        table.string('debitor_name').notNullable();
        table.enu('status', ['active','inactive']).defaultTo('active')
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
  
    //return knex.schema.dropTable(group);
};
