const express = require("express");
const app = express();
const https = require("https");

app.get("/", function(req, res){

    const url = "https://samples.openweathermap.org/data/2.5/find?q=Bucharest&units=metric&appid=b6907d289e10d714a6e88b30761fae22";

    https.get(url, function(response){

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.list[0].main.temp;
            const icon = weatherData.list[0].weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<h1>The Temperature in London is " + temp + " Degrees Celcius</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send();
        });

    });

});


app.listen(3000, function(){
    console.log("Server is open on port: 3000");
});