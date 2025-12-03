import express from 'express';
import cors from 'cors';

import config from './config/index.js';
import router from './routes/index.js';

const app = express();

app.use(express.json());
app.use(cors({ origin: 'https://tarlisondev.github.io' }));
app.use(router);

app.listen(config.port, () => {
    console.info(`App running on port ${config.port}`);
});