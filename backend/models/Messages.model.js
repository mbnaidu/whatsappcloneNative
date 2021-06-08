const mongoose = require('mongoose');
let messagesSchema = new mongoose.Schema({
    userId:String,
    messageId:String,
    message:String,
    time:String
});

let messagesModal = mongoose.model('message',messagesSchema);
const message = mongoose.model('message', messagesSchema);

//Adding new message
message.addMessage = function(handlers) {
    var message = new messagesModal();
    message.userId = handlers.userId;
    message.messageId = handlers.messageId;
    message.message = handlers.message;
    message.time = handlers.time;
    return message.save(function(err, data){
        if(!err) {
            handlers.success(data);
        } else {
            handlers.error(err);
        }
    })
};

message.getChats = function(handlers) {
    return messagesModal.find(function(err, data) {
        if(!err) {
            handlers.success(data);
        } else {
            handlers.error(err);
        }
    })
}

module.exports = message;