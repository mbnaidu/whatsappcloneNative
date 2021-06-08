const express =  require('express');
const router = express.Router();
let user = require('../Models/user.model')
router.use(express.json());


router.post('/usersignup',(req, res) => {
    if(!req.body.data.username) res.status(301).send("No username");
    user.addUser({success: function(data){res.status(200).send(data)},
                        error:function(err){res.status(200).send(err)},
                        username:req.body.data.username,
                        number:req.body.data.number,
                        messages:req.body.data.messages,
                    });
});
router.post('/finduser',(req, res) => {
	user.findById(req.body.id)
        .then(donor => {
            donor.save()
                .then(() => res.json(donor))
                .catch(err => res.status(400).json('Error: ' + err));
            })
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/addUserMessages').post((req, res) => {
    user.findById(req.body.data.id)
        .then(donor => {
            donor.messages.push(req.body.data.m)
            donor.save()
                .then(() => res.json(donor))
                .catch(err => res.status(400).json('Error: ' + err));
            })
        .catch(err => res.status(400).json('Error: ' + err));
});
router.post('/getallusers',(req, res) => {
    user.getallusers({success: function(data){res.status(200).send(data)},
                        error:function(err){res.status(200).send(err)}
                    });
});
module.exports = router;