let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let cors = require('cors')


mongoose.connect("mongodb://localhost:27017/wipras")
.then((res)=>{
    console.log("Database Connected Successfully!!!!");
}).catch((err)=>{
    console.log("Something Went Wrong with Database Connection", err);
});

let app = express();
app.use(express.json());
app.use(bodyParser.json({limit:"50mb"}));
app.use(bodyParser.urlencoded({limit:"50mb", extended:true}));
app.use(cors());

app.get('/',((req,res)=>{
    res.send("<h1>Server Running Successfully!!!!</h1>")
}));

app.use('/employee', require('./routes/employeeRoute'));
app.use('/customer', require('./routes/customerRoute'));
app.use('/issue',require('./routes/issueRoutes'));
app.use('/review', require('./routes/reviewRouts'));


app.listen(8081, ()=>{
    console.log("Server Running on http://localhost:8081");
    
})
