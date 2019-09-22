const express = require('express');

const server = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const config = require('./config/DB');

const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log('DB is connected');
    },
    err => {
      console.log(`DB not connected: ${err}`);
    },
  );
const postRoute = require('./routes/postRoutes');

server.use(bodyParser.json());
server.use(cors());

server.use('/', postRoute);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
