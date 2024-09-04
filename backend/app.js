import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { router as userRoutes } from './userRoutes.js';

const app = express();
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


app.use("/api", userRoutes);

export default app;
