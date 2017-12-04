const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')



const app = express();
app.use(bodyParser.json())

app.use( express.static( `${__dirname}` ) );



const port = 4293

app.listen(port, function(){
    console.log('Hello from port: ' + port)
})