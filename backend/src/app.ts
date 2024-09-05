import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';
import express, { json } from 'express';
import { mainRoutes } from './routes/main.routes';
import { HandleErrors } from './errors/handle.errors';
import helmet from 'helmet';

export const app = express();

app.use(helmet());
app.use(json());

app.use('/', mainRoutes);

app.use(HandleErrors.execute);