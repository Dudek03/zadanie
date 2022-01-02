const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

let dane = {
    imie: "Dawid",
    nazwisko: "Młodzianowski",
    klasa: "3I2",
    grupa: "a"
}

app.get("/", function (req, res) {
    res.send("<h1>my app on heroku! - mała zmiana</h1>")
})

app.get("/data", function (req, res) {
    res.send(dane)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})