var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  if (request.get('Authorization') == 'Bearer test_api_key') {
    response.send('Vous avez envoyé correctement les headers !')
  } else {
    response.send('Erreur, mauvais headers !')
  }
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
