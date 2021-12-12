const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
	res.send({ message: 'Full Stack!' });
});

app.listen(3000, () => {
	console.log(`Server is listening at port : 3000`);
});
