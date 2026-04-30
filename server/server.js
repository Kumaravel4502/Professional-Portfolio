const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const dotenv = require('dotenv');

const { connectDB } = require('./src/config/database.js');
const visitorRoutes = require('./src/routes/visitor.routes.js');
const contactRoutes = require('./src/routes/contact.routes.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(compression());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/contact', contactRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});