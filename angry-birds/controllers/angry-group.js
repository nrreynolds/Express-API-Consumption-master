const express = require('express'),
      groupFunctions = require('../models/groupFunctions'),
      router = express.Router();

// When attempting to go to go the idea, route to the right bird
router.get('/:id', (req, res) => {
  let targetBird = groupFunctions.getIndData(req.params.id);
  res.render('bird', targetBird);
})

// Goes to page with all the birds
router.get('/', (req, res) => {
  let birdsData = groupFunctions.getBirdsData();
  res.render('angry-birds', birdsData);
})

router.get('/:filter1/, (req, res) => {
  let birdsData = groupFunctions.filterGroup(req.params.filter);
  res.render('filter', birdsData);
})


module.exports = router;
