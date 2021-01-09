var knex=require('knex')({
    client:"mysql",
    connection:{
        host: 'localhost',
        user: 'root',
        password: 'Rohit@22',
        database: 'rohit'
    }
})

// knex.schema.createTable('student',(table)=>{
//     table.increments('id').primary();
//     table.string('name');
//     table.string('email');
//     table.string('DOB');
//     table.integer('phone_number');
// }).then(()=>{
//     console.log('student table is created sucessfully')
// }).catch((err)=>{
//     console.log('student table is alredy exists.')
// })

knex.schema.createTable('user',(table)=>{
    table.increments('id').primary();
    table.string('name');
    table.string('email');
    table.string('password');
    table.string('status').defaultTo('user');
}).then(()=>{
    console.log('user table is created sucessfully')
}).catch((err)=>{
    console.log('user table is alredy exists..........')
})

knex.schema.createTable('post',(table)=>{
    table.increments('id').primary();
    table.string('title');
    table.string('description');
    table.string('auothor_name');
    table.date('date');

}).then(()=>{
    console.log('the post table is created....')
}).catch(()=>{
    console.log('post table is already exist.....')
})
module.exports=(knex);