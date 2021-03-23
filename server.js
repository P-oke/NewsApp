const express=require("express")
const expresslayout=require("express-ejs-layouts")

const app=express()

const port=process.env.PORT||5000

app.use(express.json())

app.use(expresslayout);
app.set("view engine", "ejs")

app.use("/", require("./routes/news"))

app.listen(port, (req,res)=>{
    console.log(`App running on port ${port}`);

})