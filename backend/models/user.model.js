const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    number: {
        type:String,
        unique: true
    },
    id:String,
    messages:Array,
});

let UserModal = mongoose.model('user',userSchema);
const user = mongoose.model('user', userSchema);

//Adding new user
user.addUser = function(handlers) {
    var user = new UserModal();
    user.username = handlers.username;
    user.number = handlers.number;
    user.id = handlers.id;
    user.messages = handlers.messages;
    return user.save(function(err, data){
        if(!err) {
            handlers.success(data);
        } else {
            handlers.error(err);
        }
    })
};

user.getallusers = function(handlers) {
    return UserModal.find(function(err, data) {
        if(!err) {
            handlers.success(data);
        } else {
            handlers.error(err);
        }
    })
}

module.exports = user;