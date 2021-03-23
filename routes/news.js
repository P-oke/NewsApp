const express= require("express")
const router= express.Router()
const fetch=require("node-fetch")
const moment=require("moment")

router.get("/", async (req, res)=>{
    try {
        const news= await fetch("http://newsapi.org/v2/top-headlines?country=us&categories=technology&apiKey=86cba8de0bd3497fa6b5faea7dae25be")

        const newsinfo= await news.json()
        console.log(newsinfo);
        // console.log(news);
           
        res.render("news", {newsinfo:newsinfo.articles, moment})
        
    } catch (error) {
        
        console.log(error.message);
        
    }
    
   
})

router.post("/search", (req, res)=>{
    const search= req.body.search
    console.log(search);

})

module.exports=router