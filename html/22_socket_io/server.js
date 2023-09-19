const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const app = express();
const PORT = 8000;


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine", "ejs");

// http 서버
const server = http.createServer(app);
// socket 서버
const io = SocketIO(server);

app.get('/', (req, res)=>{
    res.render("client");
})

app.get('/chat', (req, res)=>{
    res.render('chat');
})

io.on('connection', (socket)=>{
    console.log('조인 전', socket.rooms);
    socket.on('join', (res)=>{
        console.log(`${res} 방 입장`);
        // 채팅방을 생성하는 방법은 join(방아이디), 방이 존재하면 그 방으로 접속
        socket.join(res);
        
        socket.room = res;
        console.log('조인 후', socket.rooms);
        
        // broadcast 나를 제외한 전체사용자에게 메세지 전달
        socket.broadcast.to(res).emit('create', '새로운 브라우저가 입장하였습니다.');
        const roomInfo = io.sockets.adapter.rooms.get(res);
        // console.log(io.sockets.adapter);
        // console.log(io.sockets.adapter.rooms);
        console.log("dd", roomInfo.size);
    })

    socket.on('message', (res)=>{
        // 특정방의 전체사용자에게 메세지 전달
        // console.log(socket.room);
        io.to(socket.room).emit('chat', res);
    })

    socket.on('leave', ()=>{
        socket.leave(socket.room);
        const roomInfo = io.sockets.adapter.rooms.get(socket.room);
        // console.log(io.sockets.adapter);
        // console.log(io.sockets.adapter.rooms);
        console.log("dd", roomInfo.size);
    } )

    // 4개를 보내면 4개를 모두 받도록할 수 있다. (arg, arg2, arg3, arg4)
    // callback함수도 가능
    socket.on('open', (arg, cb)=>{
        console.log(arg);
        cb(arg);
    });

    socket.on('form_message', (arg)=>{
        io.emit('back_message', arg)
        // socket.emit('back_message', arg);
    })
})


server.listen(PORT, ()=>{
    console.log(`127.0.0.1:${PORT}`);
})