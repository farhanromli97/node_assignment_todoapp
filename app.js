const express = require("express")
const app = express()
const port = 3000

// set public folder for static files
app.use(express.static("public"));


// Set EJS as the view engine
app.set("view engine", "ejs");

// import controller for root
const home = require('./controller/home.js')

// import controller for to do list
const todolist = require('./controller/todolist.js')


// define route for root
app.get('/', home)


// Define a route that renders an EJS template
app.get("/todo-list", (req, res) => {
  // Render the EJS template and pass data to it
  res.render("index", {});
});


app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})

