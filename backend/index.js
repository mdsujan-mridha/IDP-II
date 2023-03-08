const app = require("./app");
const dotenv = require('dotenv');

// handle uncaught type error 
process.on("uncaughtException",err =>{
    console.log(`Err : ${err.message}`);
    console.log(`Shutting down the server due to uncaught Exception`);
       process.exit(1);
})

// config dot env 
dotenv.config({path:"./config/.env" });

// listen server and set a message it's working or not

const server = app.listen(process.env.PORT,() =>{
     console.log(`Server working on http://localhost:${process.env.PORT}`)
});


// handle promise rejection 
process.on("unhandledRejection",err =>{
     console.log(`Err : ${err.message}`);
     console.log(`Shutting down the server due to Unhandled Promise Rejection`);

     server.close( () =>{
        process.exit(1);
     })
})