const Customer = require("../models/customerModel.js");
var config = require('../config/config.js');
const jwt = require('jsonwebtoken');


/*
* This API is used for customer login
* @param1: user_name
*   Value: email OR mobile no
* @param2: passowrd
* Example: {
			"user_name":"9899659986",
			"password":"123@123"	
		  } 
* return value: return token on success else error.  		    
*/
exports.login = (req, res) => {

 var user_name = req.body.user_name;
 var password = req.body.password;

  // Validate request
  if (user_name=='' || password=='') {
  	return res.json({ 'response': { 'status': 'error', 'code': 404, 'message': 'Username/password can not be empty!', 'result':{}} });          
  }

  Customer.login(user_name,password , (err, result) => {
    if (err) {
      if (err.kind === "not_found") {      	
      	 return res.json({ 'response': { 'status': 'error', 'code': 404, 'message': 'Invalid username/password!', 'result':{}} });          
      } else {
         return  res.json({ 'response': { 'status': 'error', 'code': 500, 'message': 'Error occured while processing!', 'result':{}} });
       }
    } else {    	    	
		// create a token
		var token = jwt.sign({ id: result.id, email: result.email }, config.secret,  {
		expiresIn: 86400 // expires in 24 hours
		});
		return res.json({ 'response': { 'status': 'success', 'code': 200, 'message':'customer logged in successfully!', 'result':{token:token}} });         	
    }
        
  });
};