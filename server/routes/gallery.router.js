const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// PUT /gallery/like/:id
router.put('/gallery/like/:id', (req, res) => {
    const id= req.params.id;;
  const queryText = ` INSERT INTO "gallery"
  ("url", "title", "description")
  VALUES($1, 2$, 3$);`
;
  pool.query(queryText, [id])
      .then((result) => {
          console.log(`Got stuff back from the database`, result);
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${queryText}`, error);
          res.sendStatus(500); // Good server always responds
      })
})
  
// GET /gallery
router.get('/', (req, res) => {
  // code hererouter.put('/like/:id', (req, res) => {
  const sqlText = `SELECT * FROM gallery ORDER BY title, origin DESC;`;
  pool.query(sqlText)
      .then((result) => {
          console.log(`Got stuff back from the database`, result);
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500); // Good server always responds
      })
})
;

module.exports = router;
