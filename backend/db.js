const mongoose = require('mongoose');

const uri = "mongodb+srv://rakhidesale:h7wZXzq3no3VtEs0@backenddb.xo52rte.mongodb.net/iquicknote?retryWrites=true&w=majority&appName=BackendDB";

const connectToMongo = async () => {
   mongoose.connect(uri)
      await console.log("Connected to Mongo Successfully"); 
}

module.exports = connectToMongo;
