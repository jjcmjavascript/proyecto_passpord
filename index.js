const express = require('express');
const rutas  = require('./config/rutas');
const Server = require('./config/server.js')
const sequelize = require('sequelize'),
	hash = require('bcrypt'),
	env = require('dotenv').config();

// servidor
const servidor = new Server(express);
servidor.setRutas(rutas);
servidor.start(process.env.PORT);
