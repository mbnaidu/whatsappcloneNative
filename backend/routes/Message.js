const express =  require('express');
const router = express.Router();
let message = require('../Models/Messages.model')
router.use(express.json());


router.post('/addMessage',(req, res) => {
    message.addMessage({success: function(data){res.status(200).send(data)},
                        error:function(err){res.status(200).send(err)},
                        userId:req.body.data.id.userId,
                        messageId:req.body.data.messageId.messageId,
                        message:req.body.data.message.message,
                        time:req.body.data.time.time,
                    });
});
router.post('/getChats',(req, res) => {
	message.findById(req.body.id)
        .then(donor => {
            donor.save()
                .then(() => res.json(donor))
                .catch(err => res.status(400).json('Error: ' + err));
            })
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;