const express = require("express");
const app = express();
const studentsRoute = require('./routes/students');
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

//! body - parser: POST, PUT gibi http isteklerinde kullanıcıdan bilgileri genelde bodyden alırız.
//! body - parser bu body isteklerini json halde almamızı sağlayan yardımcı bir kütüphanedir.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${req.path} urline ${req.method} istek atılıyor...`);
  next();
})

app.use('/students', studentsRoute);

//sadece string dönmek istersek.
app.get("/api/status", (req, res, next) => {
  res.send("active");
})

//parametre alıp json dönmek istersek.
app.get("/api/test/:name?", (req, res, next) => {
  res.send({
    message: `Welcome ${req.params.name || ""}`
  });
});

//post isteği yapmak istersek.
app.post("/api/test", (req, res, next) => {
  res.send({
    message: `Welcome ${req.body.name || ""}`,
  });

});

//Sayfa bulunamadı hatası için.
app.get('*', (req, res) => {
  res.status(404).send('Not found !!!');
});


app.listen(port, () => {
  console.log(`localhost:${port} -> üzerinden apiye ulaşabilirsiniz! :)`);
})