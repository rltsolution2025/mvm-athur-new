require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

const app = express();

/* =====================================
   TRUST PROXY (IMPORTANT FOR RENDER)
===================================== */
app.set('trust proxy', 1);

/* =====================================
   DATABASE CONNECTION
===================================== */
connectDB();

/* =====================================
   MIDDLEWARES
===================================== */
app.use(
  cors({
    origin: '*',
  }),
);

app.use(express.json());
app.use(helmet());
app.use(compression());

/* =====================================
   RATE LIMITER
===================================== */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 Minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

/* =====================================
   ROOT ROUTE
===================================== */
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'MVM Backend Running Successfully',
  });
});

/* =====================================
   HEALTH CHECK ROUTE
===================================== */
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server Healthy',
  });
});

/* =====================================
   API ROUTES
===================================== */
app.use('/api/admission', require('./routes/admissionRoute'));

app.use('/api/contact', require('./routes/contactRoute'));

app.use('/api/admin', require('./routes/adminRoute'));

/* =====================================
   404 HANDLER
===================================== */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route Not Found',
  });
});

/* =====================================
   ERROR HANDLER
===================================== */
app.use(errorHandler);

/* =====================================
   SERVER
===================================== */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running On Port ${PORT}`);
});
