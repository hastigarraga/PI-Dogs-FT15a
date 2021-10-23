const { Router } = require('express');
const router = Router();
const { Dog , Temperament } = require('../db.js');

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

router.delete('/dogs/:id' , async (req, res) => { 
    const {id} = req.params;  
    // const dogs = await allDogs()
    const response =  Dog.destroy({
        where: { id: id }
     })
     .then( function(data){
        const res = { success: true, data: data, message:"Deleted successful" }
        return res;
      })
      .catch(error => {
        const res = { success: false, error: error }
        return res;
      })
      res.json('Perro eliminado');
     
    
});


module.exports = router;