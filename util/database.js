const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete','root','Aditya@6',{
    dialect: 'mysql',
    host: 'localhost',
   
})

module.exports = sequelize