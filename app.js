const express = require ("express");

const app = express();
app.use(express.static('public'));


app.get('/', function(req , res){
    res.sendFile( __dirname +'/index.html')
})

app.get('/register', function(req, res){
    res.sendFile( __dirname + '/register.html')
})





app.listen(3000, ()=>console.log("server started on port 3000"))