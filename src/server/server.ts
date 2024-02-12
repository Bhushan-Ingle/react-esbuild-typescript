import express from 'express';
import cors from 'cors';

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const app = express();

if (isDevelopment) {
	app.use(cors());
}
/*
if (isProduction) {
	app.use(express.static('public'));
}
 */
app.use(express.static('public'));

// all our api routes
app.get('/api/hello', (req, res) => {
	res.json({ message: 'my champions' });
});

app.get('/api/data',async (req, res) => {
	const data = [{ name: 'Name1', description: 'desc1', status: 'pending' },
	{ name: 'Name2', description: 'desc2', status: 'compliant' },
	{ name: 'Name3', description: 'desc3', status: 'non-compliant', errorMsg: 'Error while fetching data' },
	];
	await new Promise(resolve => setTimeout(resolve, 1000))
	res.json(data);
});


// 404 fallback for client side routing
if (isProduction) {
	app.get('*', (req, res) => {
		res.sendFile('index.html', { root: 'public' });
	});
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));