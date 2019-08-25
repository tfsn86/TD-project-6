// Require express
const express = require('express');

// Require projectdata from data.json
const data = require('./data.json');
const projects = data.projects;

// Use express in app
const app = express();

// Setting view engine to pug
app.set('view engine', 'pug');

// Serves static files
app.use('/static', express.static('public'));

/**
 * Setting our routes
 */

// An index route to render the home page
app.get('/', (req, res) => {
	res.render('index');
});

//Sets local variable equal to the projects listed in data.json
app.locals = projects;

// An about route to render the about page
app.get('/about', (req, res) => {
	res.render('about');
});

// An dynamic project route to render routes based on project id and renders a customized version of the pug project template.
app.get('/project/:id', (req, res, next) => {
	const { id } = req.params;

	const project = projects[id];
	res.render('project', { project });
});

app.listen(3000, () => {
	console.log('This application is running on localhost:3000!');
});
