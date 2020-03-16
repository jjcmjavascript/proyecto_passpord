const rutas  =  [

	{	
		path : '/service',
		method : 'get',
		func : (req, res)=>{ console.log('estas en los servicios'); res.json({ nombre : 'estas en el servicio' })}, 
	}
	
]; 

module.exports = rutas; 