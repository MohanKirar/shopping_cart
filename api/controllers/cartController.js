const Cart = require("../models/cartModel.js");
const UserAuth = require("../models/authModel.js");

/*
* This API is used add product to cart
* @param: product_id, customer_id, and qty
* Return: message on success.
*/
exports.addToCart = (req, res) => {

 //console.log("test");
// Validate request
  if (req.user.id=='' || req.body.product_id=='' || req.body.qty=='') {
  	return res.json({ 'response': { 'status': 'error', 'code': 404, 'message': 'Username/password can not be empty!', 'result':{}} });          
  }

	if(!isNaN(req.user.id)){
  		console.log(`Customer id: ${req.user.id}`);
  		UserAuth.getCustomer(req.user.id, (err, data) =>{
		  	if (err) {
		      if (err.kind === "not_found") {      	
		      	 return res.json({ 'response': { 'status': 'error', 'code': 404, 'message': 'No customer found!', 'result':{}} });
		      } else {
		         return  res.json({ 'response': { 'status': 'error', 'code': 500, 'message': 'Error occured while verifying user!', 'result':{}} });
		       }
		    }
		    else{

				var post  = {
						customer_id: req.user.id,
						product_id: req.body.product_id,
						qty: req.body.qty					
					  };	
				   	    
   	    		   Cart.addProductToCart(post, (err, result) => {
				    if (err) {
				      if (err.kind === "not_found") {      	
				      	 return res.json({ 'response': { 'status': 'error', 'code': 404, 'message': 'No product found!', 'result':{}} });          
				      } else {
				         return  res.json({ 'response': { 'status': 'error', 'code': 500, 'message': 'Error occured while processing!', 'result':{}} });
				       }
				    } else { 
				    console.log(result);   	    	
						return res.json({ 'response': { 'status': 'success', 'code': 200, 'message':`Product added to cart!`, 'result':{}} });         	
				    }
				    				        
				  });	

		    }

  		});
  	}
  	else{
	return  res.json({ 'response': { 'status': 'error', 'code': 500, 'message': 'Invalid customer id!', 'result':{}} });  		
  	}
 
};


/*
* This API is used to get user's all products in cart. 
* @param: user id
* Return: list of all products in the cart.
*/
exports.getcart = (req, res) => {
	var customer_id =  req.user.id;
   Cart.getProductFromCart(customer_id, (err, result) => {
    if (err) {
    	 if (err.kind === "not_found") {      	
			return res.json({ 'response': { 'status': 'error', 'code': 404, 'message': 'Your cart is empty!', 'result':{}} });          
		}else{
          return  res.json({ 'response': { 'status': 'error', 'code': 500, 'message': 'Error occured while processing!', 'result':{}} });
		}
      
    } else {    	    	
		return res.json({ 'response': { 'status': 'success', 'code': 200, 'message':`${result.length} products found!`, result} });         	
    }
        
  });
};