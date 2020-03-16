const {sequelize, Sequelize }  = require('../config/conexion');   
const User = require('../Models/User')( sequelize, Sequelize);

class UserController {
    constructor(){
        this.user = User;
        this.errors = [];
        this.success = [];  
    }
    
    view( req, res )
    {
        this.user.findAll()
        .then( res => {
            
            res.json({usuarios : res }); 
        }) 
        .catch(err=>{
            return res.json({errores : 'Lo sentimos, un error ha ocurrido.'})        
        })
    }
    
    create (req, res)
    {
        
    }
    
    update (req, res)
    {
        
    }
    
    delete( req, res)
    {
        
    }
      
}
