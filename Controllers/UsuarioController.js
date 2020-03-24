const {sequelize, Sequelize }  = require('../config/conexion');
const User = require('../Models/User')( sequelize, Sequelize);
const Controller = require('./Controller');

class UserController extends Controller {
    constructor(){
        super();
        this.user = User;
    }

    view( req, res )
    {
        this.user.findAll()
        .then( data => {
            res.json({usuarios : data  });
        })
        .catch(err=>{
            console.error(err);
            return res.json({errores : 'Lo sentimos, un error ha ocurrido.'})
        })
    }

    usuario(req, res){
        return res.json({ nombre : 'El puto amo JUNIOR'});
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

module.exports = UserController;
