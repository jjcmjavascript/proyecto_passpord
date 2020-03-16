const rutas  =  [
	{	
		path : '/',
		method : 'get',
		func : (req, res)=>{ console.log(req, res) ;  res.json({ nombre : 'junior' })}, 
	},
	
	
]; 

module.exports = rutas; 