import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express()
app.use(
	compression({threshold: 0}),
	express.static('static'),
	sapper.middleware()
)

if (dev) {
	app.listen(PORT || 3000)
} else {
	module.exports = app
}

