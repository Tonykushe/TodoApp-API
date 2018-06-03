const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server'); 
    }
    console.log('Connected to MongoDB server');
    // findOneandUpdate
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b12f486c08374062045409f')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
        
    });


    // db.close();
});