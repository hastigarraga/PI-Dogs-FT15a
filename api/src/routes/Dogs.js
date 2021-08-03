const { Router } = require('express');
const router = Router();
// const { Dog , Temperament } = require('../db.js');


const { getApiInfo, getDbInfo, getAllDogs } = require('../utils/dataDogs')

router.get('/dogs', async (req, res) => { 
    const {name} = req.query;
    const dogsTotal = await getAllDogs();
    if(name){
            let dogName = await dogsTotal.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));
            dogName.length ?  
        res.status(200).send(dogName) :
        res.status(404).send('The puppy went for a walk')
    }else {
        res.status(200).send(dogsTotal);
    }

}); 


module.exports = router;