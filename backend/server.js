require('dotenv').config();

const express = require('express');

const cors = require('cors');

const helmet = require('helmet');

const compression = require('compression');

const rateLimit = require('express-rate-limit');

const connectDB = require('./config/db');

const errorHandler = require('./middleware/errorHandler');

const app = express();

connectDB();

app.use(
  cors({
    origin: '*',
  }),
);

app.use(express.json());
app.use(helmet());
app.use(compression());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.use('/api/admission', require('./routes/admissionRoute'));

app.use('/api/contact', require('./routes/contactRoute'));

app.use('/api/admin', require('./routes/adminRoute'));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running ${PORT}`);
});
