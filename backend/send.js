const express = require("express")
const app = express()

// make index.html accessible to clients
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.post('/SendDiscordRequest', function(request, response){
    console.log("Button");
    console.log(request.body.item)
    response.send("Buton");
    
    var clientServerOptions = {
        uri: 'https://maker.ifttt.com/trigger/ADD_INTEREST/json/with/key/diu32m7qVaytCoVVmd07sB',
        body: JSON.stringify(request.body) ,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    var request = require('request');
    request(clientServerOptions, function (error, response) {
        console.log(error,response.body);
        return;
    });
});

app.listen(3000)