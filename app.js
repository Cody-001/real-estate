const express = require ("express")
const app = express()
const exphbs = require ("express-handlebars")
const mongoose = require ("mongoose")
require("dotenv").config()
const generalrouter = require ("./routes/generalroutes")


const url = process.env.MONGO

mongoose.connect (url).then(()=>{
    console.log("database connected successfully")
}).catch(()=>{
    console.log("fail to connect to database")
}) 

app.engine ("hbs", exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}))
app.set ("view engine", "hbs")

app.use(express.static("public"))
app.use(express.urlencoded({ extended:true}))
app.use(express.json())
app.use("/", generalrouter)




const port = process.env.PORT || 3000
app.listen (port, ()=>{
    console.log(`server running at ${port}`)
})
