const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Dog , Temperament } = require('../db.js');
require("dotenv").config();
const axios = require('axios'); 
const { URL_API , API_KEY } = process.env
//const { apiData, dataDb, allDogs } = require('../utils/dataDogs')

const dogsRouter = require('./dogs');
const temperamentsRouter = require('./temperament');
const dogCreatedRouter = require('./dogCreated');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter); 
router.use("/", dogsRouter); 
router.use("/" , temperamentsRouter); 
router.use("/" , dogCreatedRouter); 



// const apiData = async() => {
//     const api = await axios.get(`${URL_API}?api_key=${API_KEY}`);
//     const apiInfo = await api.data.map(el =>{
//         return { 
//             id: el.id, 
//             name: el.name, 
//             height: el.height,
//             weight: el.weight,
//             life_span: el.life_span,
//         }
//     }); 
//     return apiInfo;
// }; 

// const dataDb = async() => {
//     return await Dog.findAll({ 
//         include: {
//             model: Temperament,
//             attributes: ['name'],
//             through:{
//                 attributes: []
//             },
//         }

//     });
// }; 


// const allDogs = async() => {
//     const apiInfo = await apiData();
//     const dbInfo = await dataDb();
//     const infoTotal = apiInfo.concat(dbInfo); 
//     return infoTotal;
// }  

// router.get('/dogs', async (req, res) => { 
//     const {name} = req.query;
//     const dogsTotal = await allDogs();
//     if(name){
//             let dogName = await dogsTotal.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));
//             dogName.length ?  
//         res.status(200).send(dogName) :
//         res.status(404).send('The puppy went for a walk')
//     }else {
//         res.status(200).send(dogsTotal);
//     }

// });  

// router.get('/temperaments', async (req, res) => { 
//     var tempsEnds = [];
//     const apiTemperament = await axios.get(`${URL_API}?api_key=${API_KEY}`);
//     const temperaments = apiTemperament.data.map(t => t.temperament);
//     let tempSplit = temperaments.map(e => e && e.split(","))
//     let tempArray = tempSplit.flat().sort()
//     tempArray.map(el => {
//         if (el !== undefined) {
//             let tempTrim = el.trim()
//             tempsEnds.push(tempTrim)           
//         }        
//     }); 
//     let finalArrayTemps = tempsEnds.filter((item,index)=>{
//         return tempsEnds.indexOf(item) === index;
//       }) 
    
//     console.log(finalArrayTemps)
       
//     for (let i = 0 ; i < finalArrayTemps.length ; i++) {
//         Temperament.create({name: finalArrayTemps[i]})
//     };    
    
    
//     const allTemperaments = await Temperament.findAll();
//     res.json(allTemperaments)

// });

// router.post('/dog', async (req, res) => {
//     let {
//         name,
//         height,
//         weight,
//         life_span,
//         createInDb,
//         temperaments,
//     } = req.body 

//     let dogCreated = await Dog.create({
//         name,
//         height, 
//         weight,
//         life_span,
//         createInDb
//     }) 
//     let dogDb = await Temperament.findAll({
//         where: {name: temperaments}
//     });

// dogCreated.addTemperament(dogDb); 
//     res.send('Puppy created');
// });
   


module.exports = router;



























module.exports = router;
