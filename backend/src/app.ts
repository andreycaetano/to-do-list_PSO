import express, { json } from 'express';
import 'dotenv/config'

export const app = express()

app.use(json())