const { Router } = require('express');
const router = Router();

const { apiData, dataDb, allDogs } = require('../utils/dataDogs')


router.get('/dogs/:id', async (req, res) => {
    const {id} = req.params; 
    const dogsTotal = await allDogs();
    if(id){
        let dogsId = await dogsTotal.filter(d => d.id == (id)); 
        dogsId.length ? 
        res.status(200).send(dogsId) :
        res.status(404).send('Sorry, the puppy is missing!')
    }
});   


module.exports = router;