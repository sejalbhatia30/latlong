const express = require('express')
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));




const port = process.env.PORT || 3000

const fetch = require('node-fetch');

app.post('/latlong', (req, res) => {

  const q = encodeURIComponent(req.body.pin);
  const uri = 'https://geocoder.api.here.com/6.2/geocode.json?searchtext=' + q + '&app_id=gyp4TyKfaaBmNoZLYSXV&app_code=iu87RBHaPdFGpsohi0vyYw&gen=8';
  fetch(uri).then(res => res.json()).then(res => res.JSON(JSON.stringify(res.Response.View[0].Result[0].Location.DisplayPosition)));

})

app.listen(port, () => {
  console.log('server started')
}) 
