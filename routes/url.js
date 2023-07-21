const express = require('express');
const {handleGenerateNewShortURL} = require('../controllers')
const router  = express.Router();
router.post('/',handleGenerateNewShortURL);
module.exports= router ;