const router = require('express').Router();
const express = require('express')
let User = require('../models/user.model');
const app = express()
router.route('/').get((req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error: ' + err));
	});
	router.get('/usercheck', function(req, res) {
		User.findOne({username: req.query.username}, function(err, user){
			if(err) {
			console.log(err);
			}
			var message;
			if(user) {
			console.log(user)
				message = "user exists";
				console.log(message)
			} else {
				message= "user doesn't exist";
				console.log(message)
			}
			res.json({message: message});
		});
	});
router.route('/add').post((req, res) => {
	const username = req.body.username;
	const number = req.body.number;
	const newUser = new User({
		username,
		number
	});
	newUser.save()
		.then(() => res.json('User added!'))
		.catch(err => res.status(400).json('Error: ' + err));
	});
module.exports = router;