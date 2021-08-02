const { Router } = require('express');
const router = Router();
const { Dog , Temperament } = require('../db.js');
require("dotenv").config();
const axios = require('axios'); 

const { URL_API } = process.env


const getApiInfo = async() => {
    const apiUrl = await axios.get(`${URL_API}`)
}