const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const dogsRouter = require('./dogs');
const temperamentsRouter = require('./temperament');
const dogCreatedRouter = require('./dogCreated'); 
const dogIdRouter = require('./dogId');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter); 
router.use("/", dogsRouter); 
router.use("/" , temperamentsRouter); 
router.use("/" , dogCreatedRouter); 
router.use("/" , dogIdRouter); 


module.exports = router;

