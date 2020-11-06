const { urlencoded } = require("body-parser") 
const express =  require("express")  // importing express
const app = express() // assiging express function a name
const mongoose = require("mongoose") //importing mongoose module
const user = require("./model/sign_in") //importing custome model
const new_user  = require("./middlewares/auth")

const url = "mongodb://localhost:27017/winner" // connection string 
mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true}) // parsing http request 
const con = mongoose.connection // 
con.on('open',function (err) {
    if (err) {
        console.log("connection fail")
        
    }else{
        console.log("connected successfully",)
    }
})
const port = 3000
app.use(express.urlencoded({extended:true})) //parsing http request 
app.set("views", __dirname + "/view") //
app.set("view engine", "ejs")

app.get("/", function (req,res) {
    res.render("login")
})
app.post("/login", new_user)
// app.post("/login", async function (req,res) {
//     try {
//         const new_user = new user({
//             username: req.body.username,
//             password: req.body.password,
//         })
//         await new_user.save()
//         res.redirect("/login")
//     } catch (error) {
//         console.log(error)
//     }
   
// })


app.listen(port, function (error, data){
    if (error) {
        console.log(error)
    }else{
        console.log( `server listerning on ${port}`)
    }
    
})