const app = require("./app");

const cors = require('cors');
const connectDatabase = require("./config/database")
const cloudinary = require("cloudinary");

// Handaling uncaught exception
process.on("uncaughtException",(err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the serevr due to Uncaught Exception`)
    process.exit(1);
});


// if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({path:"backend/config/config.env"});
// }


//connecting to database
// Enable CORS to allow requests from your frontend (localhost:3000)
app.use(cors({
    // origin: 'http://localhost:3000',
    origin: '*',
}));

connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working at http://localhost:${process.env.PORT}`);
});



//Unhandaled Promise Rejection
process.on("unhandledRejection",err => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection`);
  
    server.close(()=>{
        process.exit(1);
    });
  });
  

