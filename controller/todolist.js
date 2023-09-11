const path = require("path");

const toDoList = (req, res) => {
    // Render the EJS template and pass data to it
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
  }
module.exports = toDoList