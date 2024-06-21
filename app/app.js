const fastify = require('fastify');

const app = fastify();

const mongoose = require('mongoose');

const uri = mongoose.connect('mongodb+srv://sushanthmarada:5dzzmcmEXvU2hQqS@susmondb.81ktvvr.mongodb.net/?retryWrites=true&w=majority&appName=susmondb').then(()=>{
  console.info('connected to db');
})
.catch((err)=>{console.error(`there was an error connecting to db. err:${err}`)
process.exit(1);
});



app.get('/', (req, reply) => {
  reply.code(200);
  return {
    message : "server is up and running"
  }
});

app.register(('./auth/route'), {
  prefix : '/auth'
});

module.exports = app;