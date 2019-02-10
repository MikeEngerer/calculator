const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const axios = require('axios')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./'));

app.get('/', (req, res) => {
	res.render('./index.html')
})

app.post('/', (req, res) => {
	console.log(req.body)
	axios.get(`http://numbersapi.com/${req.body.answer}`)
	.then(resp => {
		res.send(resp.data)
	})
})

app.listen(8000, () => {
	console.log('App running on port 3000')
})