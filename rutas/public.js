const UsuarioController  = require('../Controllers/UsuarioController');

const rutas  =  [
	{
		path : '/',
		method : 'get',
		func : (req, res)=>{  (new UsuarioController).view(req, res); },
	},
	{
		path : '/usuario',
		method : 'get',
		func : (req, res)=>{  (new UsuarioController).usuario(req, res); },
	},
];

module.exports = rutas;
