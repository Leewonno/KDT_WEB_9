const {DataTypes} = require("sequelize");

const studentProfileModel = (sequelize) =>{
    const studentProfile = sequelize.define(
        'studentProfile',
        {
            id:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true,
            },
            name:{
                type:DataTypes.STRING(15),
                allowNull:false,
            },
            major:{
                type:DataTypes.STRING(40),
                allowNull:false,
            }
        },
        {

        }
    );
    return studentProfile;
}
module.exports = studentProfileModel;