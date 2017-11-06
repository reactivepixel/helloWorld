const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('incomming request');
  res.send('Hello World');

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('I\'m alive on port ' + port);
})
