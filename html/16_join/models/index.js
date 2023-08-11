'use strict';


const Sequelize = require('sequelize');

const config = require(__dirname + '/../config/config.json')["development"];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// 모델
db.Student = require("./Student")(sequelize);
db.Classes = require("./Classes")(sequelize);
db.StudentProfile = require("./StudentProfile")(sequelize);

// 관계

// 1:1 학생과 프로필
db.Student.hasOne(db.StudentProfile);
db.StudentProfile.belongsTo(db.Student);

// 한명의 학생은 여러 강의를 수강신청할 수 있다.
db.Student.hasMany(db.Classes); //, {foreignKey: 'student_id'} 적지 않으면 알아서 외래키를 생성해준다.
db.Classes.belongsTo(db.Student);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
