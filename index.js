var express = require("express");
var cons = require('consolidate');
var app = express();

//设置模板引擎为html
app.engine('html', cons.swig);
app.set('view engine', 'html');
//模板路径
app.set('views', __dirname + '/views');


app.get('/', function (req, res) {
	res.render('index', {
		title: 'home'
	});
});

//创建服务，端口为8000
var server = app.listen(8000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("booksInPocket app listening at http://%s:%s", host, port);
});

//托管静态资源到public
app.use(express.static('public'));