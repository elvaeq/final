// Экспортируем express mongoose в переменные
const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

//Создаем сам сервер из express
const app = express();

//Создаем порт,используя функцию get у конфига по ключу и получаем значение

const PORT = config.get("serverPort");

//Создаем фугкцию которая будет подключаться к базе данных и запускать сервер
const start = async () => {
  try {
      await mongoose.connect(config.get("dbUrl"));
      //Тут передодим в функцию и 2 параметром передаём функцию которая сработает после запуска сервера
    app.listen(PORT, () => {
console.log("Server started",PORT);
    })
  } catch (e) {}
};

start();