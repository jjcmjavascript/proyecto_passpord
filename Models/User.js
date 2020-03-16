module.exports = (sequelize , Sequelize)=>{
    const user = sequelize.define('usuarios',{
       nombre : {
           type : Sequelize.STRING,
           primaryKey : true,  
           autoIncrement :  true,
       },
        correo : {
            type : Sequelize.STRING,
            validate : {
                is : [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ],
                max : 100,  
            }, 
        },
        password : {
            type : Sequelize.STRING, 
        },
    }); 
    
    return user; 
}; 