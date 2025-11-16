import express from 'express';
import cors from "cors";
import categoriasRoutes from './routes/categorias.routes.js';


const app = express();

app.set('port',5000);

app.use(cors());

// Routes
app.use(categoriasRoutes)

export default app;
