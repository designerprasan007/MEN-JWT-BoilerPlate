const dotenv = require('dotenv');
dotenv.config({path: "./config.env"})

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const ConnectDb = require('./database');

const router = require('./Routes/routes');

const user = require('./Routes/user');

const app = express();


app.use(express.json());
app.use(morgan('dev'));
app.use(cors()); 

app.use('/api/', router);
app.use('/api/auth/', user);

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () =>{
	ConnectDb();
	console.log(`app listening on port ${PORT}`);
});