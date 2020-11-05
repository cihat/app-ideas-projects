const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`${req.method} ile /ogrenciler istegi yapıldı.,`);
});

router.post('/', (req, res) => {
  res.send(`${req.method} ile /ogrenciler istegi yapıldı.,`);
});

module.exports = router;