const express = require('express');
const { data } = require('../data/data.json');

app.set('view engine', 'pug');

app.use('/static', express.static('public'));
