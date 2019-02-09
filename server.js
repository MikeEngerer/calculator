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
	console.log(req.params)
	axios.get(`http://numbersapi.com/12`)
	.then(res => {
		console.log(res.data)
	})
})

app.listen(8000, () => {
	console.log('App running on port 3000')
})