var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render("clients", { 
        clients : [
          { firstname : "Bill", lastname : "Clinton" },
          { firstname : "Barack", lastname : "Obama" },
          { firstname : "Joe", lastname : "Biden" },
        ]
      });
});
module.exports = router;