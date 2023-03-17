const express = require('express');
const connectDb = require('./Config/db');
const expressFileUpload = require('express-fileupload');
const app = express();
const port = 3001;
const apiRoutes = require('./Routes/apiRoutes');

app.use(express.json());
app.use(expressFileUpload());
app.use((req, res, next) => {
    connectDb();
    next();
});


app.use('/api', apiRoutes);

app.use((error, req, res, next) => {
    console.error(error);
    next(error);
});
app.use((error, req, res, next) => {
    res.status(500).json(
        {
            message: error.message,
            stack: error.stack
        }
    )
    next(error);
})
app.listen(port, () => { console.log("Server is running on port ", port) });

