import express, { urlencoded } from 'express';
import { serverConfig } from './config/server.config';
import v1Router from './routers/v1/v1.router';
import {logger} from './config/logger.config';
import { attachCorrelationId } from './middlewares/correlation.middleware';

const app = express();
const PORT = serverConfig.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(attachCorrelationId);

app.use('/api/v1',v1Router);

app.listen(PORT, () => {
    logger.info(`Server running at ${PORT}`);
    logger.info(`Press Ctrl + C to stop the server`);
})
