// Импортируем схему и модель из пакетаmobgoose

const {Schema, model, Object} = require("mongoose")

//Создаем схему в которой будет храниться информация о полях сущности

const User = new Schema({
   email: { type: String, require: true, unique: true},
   password: {type: String, require: true},
   diskSpace: {type: Number, default: 1024 ** 3 * 10},
   usedSpace: { type: Number, default: 0},

   //Теперь связываем сущность пользователя и сущность фвйлов
   avatar : {type: String},
   files : [{type: ObjectID, ref: "File"}],
});

module.exports = model("User", User)
