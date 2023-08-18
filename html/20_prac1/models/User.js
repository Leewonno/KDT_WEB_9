
// user 테이블 정의
const User = function (sequelize, DataTypes){
    // sequelize는 models/index.js에 있는 sequelize (소문자)
    // DataTypes는 models/index.js에 있는 Sequelize (대문자)
    const model = sequelize.define(
        'user',
        {
            id : {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey:true,
                autoIncrement:true
            },
            pw : {
                type: DataTypes.STRING(255),
                allowNull:false,
                
            },
            name : {
                type: DataTypes.STRING(15),
                allowNull:false,
            },
            userid :{
                type: DataTypes.STRING(15),
                allowNull:false,
                unique:true,
            }
        },
        {
            tableName:"user",
            freezeTableName: true,
            timestamps: false,
        }
    )

    return model;

}

module.exports = User;