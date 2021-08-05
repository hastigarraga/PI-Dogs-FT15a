const { Router } = require('express');
const router = Router();

const {Dog, Temperament, dog_temperament } = require('../db.js');
require("dotenv").config();
const axios = require('axios'); 
const { URL_API , API_KEY } = process.env;



router.get('/temperament', async (req, res) => { 
    var tempsEnds = [];
    const apiTemperament = await axios.get(`${URL_API}?api_key=${API_KEY}`);
    const temperaments = apiTemperament.data.map(t => t.temperament);
    let tempSplit = temperaments.map(e => e && e.split(","))
    let tempArray = tempSplit.flat().sort()
    tempArray.map(el => {
        if (el !== undefined) {
            let tempTrim = el.trim()
            tempsEnds.push(tempTrim)           
        }        
    }); 
    let finalArrayTemps = tempsEnds.filter((item,index)=>{
        return tempsEnds.indexOf(item) === index;
      }) 
    
    console.log(finalArrayTemps)
       
    for (let i = 0 ; i < finalArrayTemps.length ; i++) {
        Temperament.findOrCreate({
            where: {name: finalArrayTemps[i]}
        })
    };    
    
    
    const allTemperaments = await Temperament.findAll();
    res.send(allTemperaments)

});


module.exports = router;