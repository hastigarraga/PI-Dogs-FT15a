const { Router } = require('express');
const router = Router();

const {Dog, Temperament, dog_temperament } = require('../db.js');


router.post('/dog', async (req, res) => {
    let {
        name,
        height,
        weight,
        life_span,
        createInDb,
        temperaments,
    } = req.body 

    let dogCreated = await Dog.create({
        name,
        height, 
        weight,
        life_span,
        createInDb
    }) 
    let dogDb = await Temperament.findAll({
        where: {name: temperaments}
    });

dogCreated.addTemperament(dogDb); 
    res.send('Puppy created :)');
});


module.exports = router;