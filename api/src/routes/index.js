const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const dogsRouter = require('./dogs');
const temperamentsRouter = require('./temperament');
const dogCreatedRouter = require('./dogCreated'); 
const dogIdRouter = require('./dogId');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
router.use("/", dogsRouter); 
router.use("/" , temperamentsRouter); 
router.use("/" , dogCreatedRouter); 
router.use("/" , dogIdRouter); 


module.exports = router;

