var express = require('express');
var router = express.Router();
var processNumbers = require('../modules/processNumbers');
var calculationData = require('../modules/calculationData');

router.post('/',function(req, res){
    var response = processNumbers(req.body.problem_set);
    res.send(response.toString());
})

router.post('/new', function(req, res){
    calculationData.push(req.body.problem_set);
})

router.get('/all', function(req, res) {
    for (let i = 0; i < calculationData.length; i++) {
        calculationData[i].sum = processNumbers(calculationData[i]);
        
    }
    res.send(calculationData);
})

module.exports = router;