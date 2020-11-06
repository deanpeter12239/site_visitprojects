const sign_in =  require("../model/sign_in")
// middleware to check if user existed
module.exports =  async function (req,res) {

    const query = sign_in.$where( function () {
        return { username: req.body.username } // query to find data
    })

    await query.findOne( function (error, user_data) {
        console.log(ne_arr)
       if (error) {
           console.log(error)
       }
        else {
           const new_user = new sign_in({
               username: req.body.username,
               password: req.body.password
           })
           new_user.save()
           res.json("new user Added")
           res.render("index")
           // res.redirect("/login")
    }
})
}



        // await sign_in.findOne({ username: req.body.usernamer}, async (nouser, user)=> {
//         if (nouser) {
//             const new_user = new sign_in({
//                 username: req.body.uername,
//                 password: req.body.password
//             })
//            await new_user.save()
//            res.json("new user Added")
//             // res.redirect("/login")

//         } else {
//             res.render("index")
//         }
//     })
// }
//custom middleware to check for existing users 
