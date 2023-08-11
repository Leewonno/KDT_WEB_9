const {DataTypes} = require('sequelize');

const studentModel = (sequelize) =>{
    const Student = sequelize.define(
        'student',
        {
            id:{
                type: DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true,
            },
            userid:{
                type:DataTypes.STRING(30),
                allowNull:false,
                unique:true,
            },
            pw:{
                type:DataTypes.STRING(260),
                allowNull:false
            },
            email:{
                type:DataTypes.STRING(70),
            }
        },
        {

        } 
    )
    return Student
}

module.exports = studentModel;
