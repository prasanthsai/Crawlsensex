var request = require('request');
var jsdom = require("jsdom");

function makeRequest(callback ){
  jsdom.env({
    url: "http://www.bseindia.com/markets/Equity/EuqityDB.aspx",
    scripts: ["http://code.jquery.com/jquery.js"],
    done: function (err, window) {
      var $ = window.$;
      var responseCSV = "";
      $('table').find('table:eq(2)').find('tr').each(function(){
        $(this).find('td').each(function(){
          responseCSV += '"' + $(this).text() + '",';
        });
        responseCSV = responseCSV.slice(0, -1) + '\n';
      });
      //console.log(responseCSV);
      callback(responseCSV);
    }
  });
}

exports.renderData = function(req, res, next){
  makeRequest(function(responseCSV){
    res.set('Content-Type', 'application/octet-stream');
    res.send(responseCSV);
  });
  //res.render('index', {layout: false});
};
