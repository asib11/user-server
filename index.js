const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const user = [
    {id:'1', name: 'asib', email: 'asib@gmail.com'},
    {id:'2', name: 'ahmed', email: 'ahmed@gmail.com'},
    {id:'3', name: 'hamza', email: 'hamza@gmail.com'}
]

app.get('/', (req, res) =>{
    res.send('user server is running');
})

app.get('/users',(req, res)=>{
    res.send(user);
})

app.post('/users', (req, res) =>{
    console.log('post is hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = user.length +1 ;
    user.push(newUser);
    res.send(newUser);
})

app.listen(port, ()=>{
    console.log(`server is running : ${port}`)
})