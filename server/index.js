const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const path = require('path')


connectDB();

const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Serve Static Files from templates directory
app.use("/templates", express.static(path.join(__dirname,"templates")))

// List all available templates
app.get("/api/templates",(req,res)=>{
  const fs=require('fs');
  const templatePath=path.join(__dirname,"templates");
  fs.readdir(templatePath,(err,files)=>{
    if (err) {
      console.error("Error reading templates directory:", err);
      return res.status(500).json({
        error: "Unable to fetch templates. Check the templates directory on the server.",
      });
    }else{
      const svgFile= files.filter((file)=>file.endsWith(".svg"))
      console.log("Files in templates directory: ",files);
      console.log("filtered svg files: ",svgFile);
      
      res.json(svgFile);
    }
  })
})


const { log } = require('console');



app.use('/api/auth', require('./Routes/auth'));


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));