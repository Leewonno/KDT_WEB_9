const express = require('express');
const app = express();
const PORT = 8000;

app.post('/', (req, res) =>{
    console.log(req.body)
})

app.listen(PORT, ()=>{
    console.log(`http://127.0.0.1:${PORT}`);
})
