import express from 'express';
import userRoutes from './routes/user.routes';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors()); // Middleware to enable CORS
app.use(express.json()); // Middleware to parse the body of the request message
app.use(express.urlencoded({ extended: false })); // Middleware to parse the body of the request message
app.use(express.static('public')); // Middleware to serve static files
app.use('/', userRoutes); // Middleware to handle routes

app.listen(PORT, () => {
        console.log('Server running on port ', PORT);
    }
);