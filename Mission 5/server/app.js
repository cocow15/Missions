require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static('uploads'));

// Database connection
mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true,
    })
    .then(() => console.log("Connected to the databases!"))
    .catch((err) => console.log(err))

// routes prefix
app.use("/api/post", require('./routes/routes'))

// Start server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));