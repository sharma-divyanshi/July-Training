const ex=require("express");
const app=ex();
const path=require("path");

const port=8080;
// app.use(express.static("public"));
// app.use("views",path.join(__dirname,"public")); // it is used to express where to look our public folder it means it is telling that  our public folder is in the main directory where our index.js file is located.
app.set("view engine","ejs");  // it means we are using ejs  as our view engine
app.set("views",path.join(__dirname,"/views")); // it is used to express where to look our views folder it means it is telling that  our views folder is in the main directory where our index.js file is located.

app.get("/" ,(req,res)=>{
       res.render("home.ejs");   // we have to render it when we have to send file in response
})
app.get("/roll",(req,res)=>{
    let diceVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal}); // we are passing the dice in our roll.ejs file;
})
app.get("/home",(req,res)=>{
    res.send("hello");
})
app.get("/ig/:username",(req,res)=>{
   const followers=["adams","manish","kusum","rahul","chudail"];
    let {username}=req.params;
    res.render("insta.ejs",{username,followers});
})
app.get("/insta/:username",(req,res)=>{
    const instadata= require("./data.json");
    let {username}=req.params;

    let data=instadata[username];
    if(data){
    res.render("instagram.ejs",{data});
    }
    else{
        res.send("user not found");
    }
})

app.listen(port, () => {
    console.log("app is listening");
});