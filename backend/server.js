const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());
app.use('/api/tasks', taskRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/todo', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));
