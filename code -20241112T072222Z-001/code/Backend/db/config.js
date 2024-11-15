 const mongoose = require("mongoose");
// // Middleware
 const MONGO_URI = 'mongodb+srv://surendharji14123:7092139635@cluster0.0hnd6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// // Connect to MongoDB using the connection string
 mongoose.connect(MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
 }).then(() => {
   console.log(`Connection successful`);
 }).catch((e) => {
   console.log(`No connection: ${e}`);
 });

// // mongodb://localhost:27017 



//const mongoose = require('mongoose');

//mongoose.connect('mongodb+srv://Arun_7733:TYvDC%40cmjBL9%40Xz@myatlasclusteredu.fzgr6.mongodb.net/?retryWrites=true&w=majority&appName=myAtlasClusterEDU', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//});
