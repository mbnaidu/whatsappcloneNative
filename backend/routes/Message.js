const express =  require('express');
const router = express.Router();
let message = require('../Models/Messages.model')
router.use(express.json());

router.post('/getChat',(req, res) => {
    message.getChat({success:function(data){res.status(200).send(data)},
                            error:function(err){res.send(err)},
                        userId:req.body.data1.userId,
                        senderId:req.body.data1.senderId,
                    });
});

router.post('/addMessage',(req, res) => {
   message.findById(req.body.data.chatId)
        .then(donor => {
            donor.messages.push(req.body.data.message)
            donor.save()
                .then(() => res.json(donor))
                .catch(err => res.status(400).json('Error: ' + err));
            })
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;