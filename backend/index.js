const express = require('express');
const userRouter = require('./routers/userRouter');
const utilRouter = require('./routers/utils');
const contactRouter = require('./routers/ContactRouter')


const cors = require('cors');

const app = express();
const port = 5000;

// to allow client to make request
app.use( cors({ origin: 'http://localhost:3000' }) )

app.use(express.json());
app.use('/user', userRouter); 
app.use('/util', utilRouter);   
app.use('/contact', contactRouter)

app.get('/', (req, res) => {
    res.send('Working Fine');
});

app.get('/add', (req, res) => {
    res.send('Add Request on Server');
});

app.use(express.static('./static/uploads'));

app.listen( port, () => { console.log('server started') } );