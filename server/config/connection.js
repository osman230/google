const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/deep-thoughts', 
{ useNewUrlParser: true,
  useUnifiedTopology: true, })
        .then(connect => console.log('connected to mongodb..'))
        .catch(e => console.log('could not connect to mongodb', e))
module.exports = mongoose.connection;
