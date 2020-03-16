let  publico =  require('../rutas/public');
let  usuarios =  require('../rutas/usuarios');

const rutas  = [
	...publico,
	...usuarios
];  

module.exports = rutas; 