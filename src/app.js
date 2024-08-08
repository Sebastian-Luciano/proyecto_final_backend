/* import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import corsOptions from './config/corsConfig.js';
import userRoutes from './routes/userRoutes.js';
import incidenceRoutes from './routes/incidenceRoutes.js';
import setupSocket from './config/socketConfig.js';

dotenv.config();

const app = express();
const server = createServer(app);

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/incidences', incidenceRoutes);

const io = new Server(server);
setupSocket(io);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); */

/* 
import express from 'express';
import initDatabase from './scripts/initDatabase.js';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import corsOptions from './config/corsConfig.js';
import userRoutes from './routes/userRoutes.js';
import incidenceRoutes from './routes/incidenceRoutes.js';
import setupSocket from './config/socketConfig.js';

dotenv.config();

const app = express();
const server = createServer(app);

// Configura CORS para Express
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/incidences', incidenceRoutes);

// Configura Socket.IO con opciones CORS
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:3000", "https://tudominio.com"],
    methods: ["GET", "POST"],
    credentials: true
  }
});

setupSocket(io);

const PORT = process.env.PORT || 3000;

initDatabase().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Failed to initialize database:', error);
});

export default app; */

// src/app.js
import express from 'express';
import initDatabase from './scripts/initDatabase.js';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import corsOptions from './config/corsConfig.js';
import userRoutes from './routes/userRoutes.js';
import incidenceRoutes from './routes/incidenceRoutes.js';
import setupSocket from './config/socketConfig.js';

dotenv.config();

const app = express();
const server = createServer(app);

// Configura CORS para Express
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/incidences', incidenceRoutes);

// Configura Socket.IO con opciones CORS
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:3000", "https://tudominio.com"],
    methods: ["GET", "POST"],
    credentials: true
  }
});

setupSocket(io);

const PORT = process.env.PORT || 3000;

initDatabase().then(() => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Failed to initialize database:', error);
});

export default app;