const { Router } = require('express');
const router = Router();

const { apiData, dataDb, allDogs } = require('../utils/dataDogs');


router.get('/dogs', async (req, res) => { 
    const {name} = req.query;
    const dogsTotal = await allDogs();
    if(name){
            let dogName = await dogsTotal.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));
            dogName.length ?  
        res.status(200).send(dogName) :
        res.status(404).send('Sorry, the puppy went for a walk!')
    }else {
        res.status(200).send(dogsTotal);
    }

});  


module.exports = router;