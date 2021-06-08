const express =  require('express');
const router = express.Router();
let user = require('../Models/user.model')
router.use(express.json());

router.post('/usersignup',(req, res) => {
    console.log(req.body.data)
    if(!req.body.data.username) res.status(301).send("No username");
    user.addUser({success: function(data){res.status(200).send(data)},
                        error:function(err){res.status(200).send(err)},
                        username:req.body.data.username,
                        number:req.body.data.number,
                    });
});
var onFetchUsernameSuccessCallBack =  function(data, req) {
    if(data.length === 0) {
        var response = {msg: "User not found"}
    }
    else if(data[0].password != req.body.data.password) {
        var response = {msg: "Login failed"}
    } else {
        var response = {status: "Success"}
    }
    return response;
}
router.post('/login',(req, res) => {
    console.log(req.body.data)
    user.getPassword({success:function(data){res.status(200).send(data)},
                            error:function(err){res.send(err)},
                        username:req.body.data.username
                    });
});
router.post('/finduser',(req, res) => {
    
	user.findById(req.body.data.number)
        .then(donor => {
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