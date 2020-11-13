const express = require('express');

const app = express();

app.use(express.static('./dist/PoneyClub'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/PoneyClub' }
  );
});

app.listen(process.env.PORT || 8080, function(){
  console.log("Node app is running at localhost:" + app.get('port'));
});

console.log(`Running on port ${process.env.PORT || 8080}`)
