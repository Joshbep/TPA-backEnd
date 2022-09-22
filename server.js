const express = require ("express")

const app = express()
const routes = require('./routes')
const PORT = process.env.PORT || 3001;

/* == Internal Modules == */


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/pins", routes.pins)

app.listen (PORT, () => {
    console.log(" Connected! ")
})
