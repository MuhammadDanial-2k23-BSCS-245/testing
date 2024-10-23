const express = require("express");


const app = express()

const port = 2000;

app.use(express.json());




app.listen(port,()=>{
    console.log(`server is listening on port: http://localhost:${port}`)
})

app.get('/' ,(req, res)=>{
    res.send('connted successfuly');
})

const studentData = [];

/POST API

app.post('/api/post_data' , (req, res)=>){
    console.log{"result", req.body};

    const.log("result", req.body);
}