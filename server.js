const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const axios = require('axios')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	let templateVars = {data: null, answer: null}
	res.render('pages/index', templateVars)
})

app.post('/', (req, res) => {
	axios.get(`http://numbersapi.com/${Math.round(req.body.answer)}`)
	.then(resp => {
		let templateVars = {data: resp.data, answer: req.body.answer}
		res.render('pages/index', templateVars)
	})

	// UNCOMMENT WHILE OFFLINE
	// let templateVars = {data: null, answer: req.body.answer}
	// res.render('pages/index', templateVars)

})

app.listen(8080, () => {
	console.log('App running on port 8080')
})