module.exports=(signup,knex,jwt)=>{
    signup.post('/signup',(req,res)=>{
        let student=req.body;
        knex.select('*')
        .from('user')
        .where('email',student.email)
        .then(data=>{
            if(data.length<1){
                knex('user')
                .insert({
                    'name':student.name,
                    'email':student.email,
                    'password':student.password
                })
                .then(result=>{
                    console.log('signup successfully....')
                    res.send('signup successfully....')
                })
                .catch(err=>{
                    console.log(err)
                })
            }
            else{
                res.send('student is login already use another email')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
}