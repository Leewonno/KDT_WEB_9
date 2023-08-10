const { DataTypes } = require("sequelize");

const classModel = (sequelize) => {
    const classes = sequelize.define(
        'classes',
        {
            id:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            name:{
                type:DataTypes.STRING(30),
                allowNull:false
            },
            room:{
                type:DataTypes.STRING(10),
            },
            code:{
                type:DataTypes.STRING(10),
                allowNull:false,
            },
            professor:{
                type:DataTypes.STRING(20),
            }
        },
        {

        }
    )
    return classes;
}

module.exports = classModel;