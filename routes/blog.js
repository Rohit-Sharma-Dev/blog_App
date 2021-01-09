module.exports = (blog, knex, jwt) => {
    

    // At this endpoint user posting a post on to the database.
    blog

        .post("/creat_post", (req, res) => {

            console.log({ "token": req.headers.cookie });
            console.log(req.body.tittle);
            
            if (req.headers.cookie !== undefined) {
                var token = req.headers.cookie.slice(4);
                if (req.body.tittle == undefined || req.body.description == undefined) {
                    res.send("Please fill the title or description")
                } else {
                    var cookie = req.headers.cookie;
                    var token = cookie.slice(4);
                    var token_verify = jwt.verify(token, "rohit");                   
                    var dateTime = new Date({});
                    
                    knex("post").insert({
                        "tittle": req.body.tittle,
                        "description": req.body.description,
                        "user_id":token_verify.first_name,
                        "created_on": dateTime
                    })
                        .then((data) => {
                            console.log("Data inserted succesfully....");
                            res.send("Your blog is posted succesfully....!");
                        }).catch((err) => {
                            console.log(err);
                            res.send(err);
                        });
                }
           



            }else{
                res.send({"error":"please login"});

            }
        })
}
