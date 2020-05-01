const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Carrega o model de Usuário
require("./models/user");

app.use(bodyParser.json());

// Inicia as rotas da API
app.use("/api", require("./controllers/userController"));

app.listen(3000);
