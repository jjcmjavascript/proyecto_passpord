const express = require('express'); 
const server = express(); 
const router = express.Router(); 
const rutas  = require('./config/rutas'); 
const sequelize = require('sequelize'), hash = require('bcrypt'), env = require('dotenv'); 


server.use( express.urlencoded({extended : true }))
server.use( express.json() )


rutas.forEach( e => {
	router[e.method]( e.path,  e.func);   
}); 

server.use(router);
server.listen(3000); 
