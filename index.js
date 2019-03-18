const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	// we don't care about the request
	// send response right away
	res.json({ success: true });
});

server.get('/:name', (req, res) => {
	// we don't care about the request
	// send response right away
	res.json({ success: true });
});

server.post('/', (req, res) => {
	// we don't care about the request
	// send response right away
	res.json({ success: true });
});

server.post('/:name', (req, res) => {
	const { name } = req.params;
	res.json({ message: `User ${name} created!` });
});

server.listen(4000, () => console.log(`Listening on port 4000`));
