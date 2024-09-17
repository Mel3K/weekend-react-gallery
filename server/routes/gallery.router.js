const express = require('express');
const router = express.Router();
import Axios from 'axios';

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
Axios({
  method: 'get',
  url:""
})
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
});

module.exports = router;
