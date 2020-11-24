const express = require("express");
const bodyParser = require("body-parser");

const db = request("./db");

const app = express();

app.use(bodyParser.json());

app.listen(5000, () => {
  console.log('gogogo!');
});

app.get('api/values', function(req, res, next) {
  db.pool.query('select * from lists;',
    (err, results, fields) => {
      if(!err)
        res.json(results);
    }
  );
})

app.get('api/value', function(req, res, next) {
  db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}");`,
    (err, results, fields) => {
      if(!err)
        res.json({sucess: true, value: req.body.value});
    }
  );
})