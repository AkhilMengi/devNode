
const express = require('express')

const app = express()

const PORT =3200;

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(PORT,()=>{
    console.log(`Server is liatening at ${PORT}`)
})