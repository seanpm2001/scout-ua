var mongoose = require('mongoose');
console.log('connecting to mongoose');
mongoose.connect(process.env.MONGO_STRING, {  })

