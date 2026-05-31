const mongos = require('mongos');

function connectdb() {
    try {
        console.log('Connecting to MongoDB...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
    mongos.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to MongoDB successfully!');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
            throw error;    
  });
}

module.exports = {
  connectdb
};  
