const express = require('express');
const router = express.Router();
const { addbrand,uploadImage,brands} = require('../Controllers/Brand/brand');

router.post('/addbrand',addbrand);
router.get('/getbrands',brands);

module.exports = router;