require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/task');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

app.use(express.static(path.join(__dirname,'public')));

// Redirect all other routes to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/task-manager-frontend', 'index.html'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit process with failure code
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
