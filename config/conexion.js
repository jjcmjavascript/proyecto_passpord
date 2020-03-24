const Sequelize = require('sequelize') , env = require('dotenv').config();;
let {MYSQLDB, MYSQLUSER,MYSQDBPASS, MYSQDBHOST, DIALECT } = process.env;

const sequelize = new Sequelize(MYSQLDB, MYSQLUSER, (MYSQDBPASS ? MYSQDBPASS : ''),{
    host : MYSQDBHOST,
    dialect : 'mysql'
})
sequelize.sync();

module.exports  = {
    sequelize,
    Sequelize
};
