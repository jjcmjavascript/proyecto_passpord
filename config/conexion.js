const Sequelize = require('sequelize');
let {MYSQLDB, MYSQLUSER,MYSQDBPASS, MYSQDBHOST, DIALECT } = process.env; 

const sequelize = new Sequelize(MYSQLDB, MYSQLUSER,MYSQDBPASS,{
    host : MYSQDBHOST,
    dialect : DIALECT
    
})

module.exports  = {
    sequelize,
    Sequelize
}; 