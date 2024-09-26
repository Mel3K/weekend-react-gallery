const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const sqlText = ` INSERT INTO "gallery"
  ("url", "title", "description")
  VALUES('images/lanternfest.jpeg', 'Water Lantern Festival' "Seth & I at the Water Lantern Festival.");`
;
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
  
// GET /gallery
router.get('/api/gallery', (req, res) => {
  // code hererouter.put('/like/:id', (req, res) => {
  const sqlText = `SELECT * FROM gallery ORDER BY name, origin DESC;`;
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
