const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const user = [
    {id:'1', name: 'asib', email: 'asib@gmail.com'},
    {id:'2', name: 'ahmed', email: 'ahmed@gmail.com'},
    {id:'3', name: 'hamza', email: 'hamza@gmail.com'}
]

app.get('/', (req, res) =>{
    res.send('user server is running');
})

app.get('/user',(req, res)=>{
    res.send(user);
})

app.listen(port, ()=>{
    console.log(`server is running : ${port}`)
})