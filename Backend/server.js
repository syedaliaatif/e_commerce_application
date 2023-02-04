const express = require('express');

const app = express();
const port = 3001;
const apiRoutes = require('./Routes/apiRoutes');

app.use(express.json());
app.get('/', async (req, res, next) => {

    try {
        //aconsole.log("pp");
        res.json({ message: "Api is running...." })
    }
    catch (er) {
        next(er);
    }



})

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

