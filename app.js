require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());

// Banco de dados
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB conectado!'))
  .catch(err => console.log(err));

// Rotas
app.get('/', (req, res) => res.send('API do Blog funcionando!'));

// Porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Servidor rodando na porta ${PORT}'));
