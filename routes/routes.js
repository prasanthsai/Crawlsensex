var express = require('express');
var router = express.Router();

var index = require(global._ROOT+'/app/index.js');
var sensexCrawl = require(global._ROOT+'/app/sensex_crawl.js');


router.get('/', index.renderIndex);
router.get('/sensex_crawl', sensexCrawl.renderData);

module.exports.router = router;
