import mongoConnect from './utils/db';
import app from './app';

const port = process.env.PORT_API || 3001;
(async () => {
	try {
		await mongoConnect();
		app.listen(port, () => {
			/* eslint-disable no-console */
			console.log(`Listening: http://localhost:${port}`);
			/* eslint-enable no-console */
		});
	} catch (error) {
		console.log('Server error', (error as Error).message);
	}
})();
