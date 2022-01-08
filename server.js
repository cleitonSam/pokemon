const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/Pokemon'));

app.get('/*', (req, res) =>{
  res.sendFile(__dirname + '/dist/Pokemon/index.html');
})

app.listen(PORT, () => {
  console.log('servidor iniciado na porta' + PORT);
})
