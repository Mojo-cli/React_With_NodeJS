const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const PORT =3000
const {mongoUrl} = require("./keys")



require('./models/user');
const authRoutes = require('./routes/authRoutes')
app.use(bodyParser.json())
app.use(authRoutes)



mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})

mongoose.connection.on('connected',
    ()=>{
        console.log("Connected To Database")
    }
)

mongoose.connection.on('error',
    (err)=>{
        console.log("error",err)
    }
)

app.listen(PORT,()=>{
    console.log("server running" + PORT)
})