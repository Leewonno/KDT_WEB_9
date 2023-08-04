const express = require("express");
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// 임시데이터
const comments = [
    {
        id: 1,
        userId: 'helloworld',
        date:'2023-08-01',
        comment:'안녕하세요'
    },
    {
        id: 2,
        userId: 'happy',
        date:'2023-08-02',
        comment:'안녕~'
    },
    {
        id: 3,
        userId: 'lucky',
        date:'2023-08-03',
        comment:'반가워'
    },
    {
        id: 4,
        userId: 'good',
        date:'2023-08-04',
        comment:'안녕!!!!'
    },
    {
        id: 5,
        userId: 'five',
        date:'2023-07-31',
        comment:'오랜만이야'
    }
]

app.get('/', (req, res)=>{
    res.render("index");
})

app.get('/comments', (req, res)=>{
    res.render("comments", {commentInfors:comments});
})

// GET /comment/:id
app.get('/comment/:id', (req, res)=>{
    // res.send(req.params);
    // console.log(req.params.id);
    const commentId = req.params.id - 1;
    res.render('comment', {commentInfor:comments[commentId]});
})

// 맨마지막 선언
app.get('*', (req, res)=>{
    res.render('404');
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})