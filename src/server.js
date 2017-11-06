const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('incomming request');
  res.send('Hello World');

});

app.listen(3000, () => {
  console.log('I\'m alive!!');
})
