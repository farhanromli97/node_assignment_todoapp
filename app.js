const express = require("express")
const app = express()
const port = 3000

// set public folder for static files
app.use(express.static("public"));


// import controller for root
const home = require('./controller/home.js')

// import controller for to do list
const toDoList = require('./controller/todolist.js')


// define route for root
app.get('/', home)

// Define a route that renders To-Do list
app.get('/form', toDoList)




app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})

