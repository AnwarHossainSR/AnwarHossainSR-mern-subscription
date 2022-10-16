import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import articlesRoutes from './routes/articles';
import authRoutes from './routes/auth';
import subsRoutes from './routes/subs';

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI as any)
  .then(() => {
    console.log('Connected to mongodb');

    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use('/auth', authRoutes);
    app.use('/subs', subsRoutes);
    app.use('/articles', articlesRoutes);

    app.listen(8080, () => {
      console.log(`Now listening to port 8080`);
    });
  })
  .catch((error) => {
    console.log({ error });
    throw new Error(error);
  });
