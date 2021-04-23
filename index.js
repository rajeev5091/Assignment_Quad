const express = require('express');
const app = express();
const port = 3000;

const fetch = require('node-fetch');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    fetch('https://api.wazirx.com/api/v2/tickers')
    .then(res => res.json())
    .then(json => {
        var a=Object.values(json);
        console.log("First user in the array:");
        res.render('home', {data:a.slice(0,10)});
})
  
}); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});