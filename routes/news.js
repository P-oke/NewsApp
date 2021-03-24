const express= require("express")
const router= express.Router()
const fetch=require("node-fetch")
const moment=require("moment")

router.get("/", async (req, res)=>{
    try {
        const news= await fetch("http://newsapi.org/v2/top-headlines?country=us&categories=technology&apiKey=86cba8de0bd3497fa6b5faea7dae25be")

        const newsinfo= await news.json()
        console.log(newsinfo);
        
           
        res.render("news", {newsinfo:newsinfo.articles, moment})
        
    } catch (error) {
               
        console.log(error.message);
    }
    
   
})

router.post("/search", async (req, res)=>{
    try {
        const search= req.body.search
        const news= await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=86cba8de0bd3497fa6b5faea7dae25be`)
        const newsinfo = await news.json()
        res.render("news", {newsinfo:newsinfo.articles, moment})
    
    } catch (error) {
        console.log(error.message);
        
    }
   
})

module.exports=router