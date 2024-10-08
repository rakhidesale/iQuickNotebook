const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express();
const port = 5000
var cors = require('cors')

app.use(cors())

//Middleware
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
    console.log(`iQuickNote app backend listening at http://localhost:${port}`)
})