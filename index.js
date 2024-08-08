const express = require('express');
const mongoose = require('mongoose');
const classRoutes = require('./Routes/classRoutes');
const app = express();
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});


app.use(express.json());

app.use('/api', classRoutes);


app.use((err, req, res, next) => {
    console.error('Error occurred:', err);
    res.status(500).json({ message: 'An error occurred', error: err.message });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
