exports.renderIndex = function(req, res, next){
  res.render('index', {layout: false});
};
