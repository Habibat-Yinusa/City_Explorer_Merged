import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import * as dotenv from "dotenv"
import { connectDB } from "./config/db"
import userRoutes from "./routes/userRoutes";
import chatbotRoute from "./routes/chatbotRoute";
import businessRoute from "./routes/bussinesRoute"
import { protect } from "./middlewares/authMiddleware";
import {botware} from "./middlewares/botMiddleware"


dotenv.config();
connectDB();

// Configure CORS
const allowedOrigins = ['http://localhost:3000', 'https://sulky-acoustics-perfect-tub-production.pipeops.app/']; 
const options: cors.CorsOptions = {
    origin: allowedOrigins
};

const app = express();
app.use(cors())
const port = 3000;

// app.use(cors({
//   credentials: true,
// }));

//middlewares
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json())

//end-points
app.use("/user", userRoutes)
app.use("/", chatbotRoute)
app.use("/business", businessRoute)
app.options('/*', cors());
app.options('/chatbot', cors());


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


