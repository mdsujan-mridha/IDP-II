const mongoose = require('mongoose');


// url = database url

const database = (module.exports = () =>{
    const connectionParams = {
      useNewUrlParser:true,
      useUnifiedTopology:true,
    }
    try{
      mongoose.set('strictQuery', true);
       mongoose.connect("url",
       connectionParams
       );
       console.log('database connected');
    } catch(error){
      console.log(error);
      console.log("database cant not connecting");
    }
  
  });

  module.exports = database;