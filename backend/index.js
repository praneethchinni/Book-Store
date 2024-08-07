import express from 'express';
import { PORT, mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModels.js';
import booksRoute from './routes/bookRoute.js';
import cors from 'cors';


const app = express();

app.use(express.json());

app.use(cors());

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }));

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('welcome to MERN Stack Tutorial')
});

app.use('/books', booksRoute);

mongoose 
    .connect(mongoDBURL)
    .then(() => {
        console.log('MongoDB is connected');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });