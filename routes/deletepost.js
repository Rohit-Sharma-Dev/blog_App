module.exports=(router,knex)=>{
    router
        .delete('/delete/post/:id',(req,res)=>{
            knex('post')
            .where('id',req.params.id).del()
            .then((result)=>{
                res.send('post deleted succesfully.......')
            }).catch((err)=>{res.send(err)})
        })
}