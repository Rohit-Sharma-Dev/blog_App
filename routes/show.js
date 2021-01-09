module.exports=(show,knex)=>{
    show.get('/showpost',(req,res)=>{
        let data = knex('post').select('*')
        .where('id', '>=', '1')
        .where('id', '<', '11')
        res.send(data)

    })

}