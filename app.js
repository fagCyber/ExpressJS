const express = require('express');
const hbs = require('hbs');

var app = express();
var port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
	var now = new Date().toString();
	
	console.log(`${now} : ${req.method} ${req.body}`);
	next();
});

app.get('/', (req, res) => {
	res.render('home', {
		pageTitle: 'Home Page',
		welcomeMessage: 'Welcome To the Home Page'
	});
});

app.get('/project', (req, res) => {
	res.render('project', {
		pageTitle: 'Project'
	});
});
app.get('/about', (req, res) => {
	res.render('about', {
		pageTitle: 'About Page'
	});
});
app.listen(port, () => {
	console.log(`server running on port ${port}..`);
});