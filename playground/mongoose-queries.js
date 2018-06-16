const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

let id = '5b240bd28dfebf1d6040aee02';

Todo.findById(id).then((todo) => {
    console.log('Todo by ID', todo);
}).catch((e) => console.log(e))