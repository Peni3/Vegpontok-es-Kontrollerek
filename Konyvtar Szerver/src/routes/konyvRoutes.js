const express = require('express');
const router = express.Router();
const konyvController = require('../controllers/konyvController'); 

router.get('/', konyvController.getKonyvek);
router.get('/darab', konyvController.getDarab);
router.get('/osszoldal', konyvController.getOsszoldal);
router.get('/szerzok', konyvController.getSzerzok);
router.get('/:id', konyvController.getKonyvById);

module.exports = router;