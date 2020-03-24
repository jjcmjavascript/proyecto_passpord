module.exports = (sequelize , Sequelize)=>{
    const user = sequelize.define('usuarios',{
       id : {
           type : Sequelize.INTEGER,
           autoIncrement : true,
           primaryKey: true,
       },
       nombre : {
           type : Sequelize.STRING,
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
        created_at : {
            type : 'TIMESTAMP',
            defaultValue : Sequelize.literal('CURRENT_TIMESTAMP'),
        },
    },
    {
        timestamps : false,
    });

    return user;
};
