const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { error: [] }); // Pass error array to avoid undefined errors
});

module.exports = router;