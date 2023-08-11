const {Student, Classes, StudentProfile} = require("../models/index");

exports.main = (req, res)=>{
    res.render("student");
}

exports.get_student = async (req, res)=>{
    try{
        const student = await Student.findAll({
            // 원하는 컬럼만 가지고오기
            attributes:[ "id", "userid", "email" ],
            // include : 쿼리를 실행할 때 관련된 모델의 데이터도 함께 조회할 수 있도록 하는 옵션
            include: [{model:StudentProfile, attributes:['major', 'name']}],
        });
        res.send(student)
        // res.render("student", {data:student});
    }catch(err){
        console.log(err);
    }
}

exports.post_student = async (req, res) =>{
    try{
        const { userid, pw, name, email, major } = req.body;
        const user = await Student.create({
            userid,
            pw,
            email,
            // Table 이름
            studentProfile:{
                name,
                major,
            }
        },{
            // studentProfile이 뭔지 알려줘야한다.
            include:StudentProfile,
            // [{model : StudentProfile}]
        });
        console.log(user)
        res.send(user);
    }catch(err){
        console.log(err);   
    }
}
exports.post_class = async (req, res) => {
    try{
        const { name, room, code, professor , studentId } = req.body;
        const classes = await Classes.create({
            name,
            room,
            code,
            professor,
            studentId,
        })
        res.send(classes);
    }catch(err){
        console.log(err);   
    }
}