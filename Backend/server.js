const express = require('express');

const app = express();
const port = 3000;
const apiRoutes = require('./Routes/apiRoutes');

app.get('/', async (req, res, next) => {

    res.json({ message: "Api is running...." })


})
app.use((error, req, res, next) => {
    console.error(error);
    next(error);
});
app.use('/api', apiRoutes);
app.listen(port, () => { console.log("Server is running on port ", port) });

