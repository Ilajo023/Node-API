require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//route middlewares
app.use('/', routes);

app.get('/', (req, res) => {
  res.json({message: 'Node,express and mongoose Shop API'});
  });

app.listen(process.env.PORT, () => {
  mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection
    .once('open', () => console.log('Connected to database'))
    .on('error', (err) => console.error('connecting to MongoDB' + err));
  console.log('Server is listening...');
});
