/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import cookieParser from 'cookie-parser';

const app: Application = express();

// parser
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:['http://localhost:5173']}));

// /api/v1/students/create-student

// application route
app.use('/api/v1/', router);

const test = (req: Request, res: Response) => {
  Promise.reject();
  // const a = 10;
  // res.send({ status: 'success' });
};

app.get('/', test);

app.use(globalErrorHandler);

//not found
app.use(notFound);

export default app;
