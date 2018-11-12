var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sso/acs/:agentid', function(req, res, next) {

  console.log("### Req body : ", req.body);
  console.log("### Req query : ", req.query);

  const agentId = req.params.agentid;
  const samlResponse = req.body.SAMLResponse;
  const relayState = req.body.relayState;

  res.render('acs', { samlResponse, relayState, agentId});
});

router.get('/sso/metadata', function(req, res, next) {
  res.render('metadata', {});
});

module.exports = router;
