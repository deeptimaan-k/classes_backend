const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const classRoutes = require('./Routes/classRoutes');
const videoRoutes = require('./Routes/videoRoutes');
const ClassModel = require('./Models/classModel');
const app = express();
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB');

    try {
        const dataPath = path.join(__dirname, 'data.json'); 
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        
        await ClassModel.deleteMany({}); 
        
        await ClassModel.insertMany(data); 
        console.log('Data imported successfully!');
    } catch (error) {
        console.error('Error importing data:', error);
    }
});

// Middleware to parse JSON requests
app.use(express.json());

// API Routes
app.use('/api', classRoutes);
app.use('/api', videoRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
