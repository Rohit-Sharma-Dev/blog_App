module.exports =(update,knex)=>{
    update.put('/update/:id',(req,res)=>{
        knex('user').where('id',req.params.id).update({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
            }).then(function(numberOfUpdatedRows) {
                if(numberOfUpdatedRows) {
                    res.json(success);
                    return;
                }
            }).catch(function(err){
                res.status('500');
                res.json(err);
                return;         
            });

    })
}


