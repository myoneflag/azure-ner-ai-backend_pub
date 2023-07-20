var express = require('express')
var cors = require('cors');

app = express()

port = process.env.PORT || 3001;

bodyParser = require('body-parser');

app.use(cors({
  origin: '*'
}));
app.use(express.static('public'));
// app.use(express.limit('200M'));
app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true, parameterLimit: 100000 }));

var routes = require('./src/routes/routes');

routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);