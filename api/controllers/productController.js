const Products = require("../models/productModel.js");

/*
* This API is used to get all product 
* @param: no parameter required
* Return: list of all products.
*/
exports.products = (req, res) => {
   Products.getAllProducts((err, result) => {
    if (err) {
      if (err.kind === "not_found") {      	
      	 return res.json({ 'response': { 'status': 'error', 'code': 404, 'message': 'No product found!', 'result':{}} });          
      } else {
         return  res.json({ 'response': { 'status': 'error', 'code': 500, 'message': 'Error occured while processing!', 'result':{}} });
       }
    } else {    	    	
		return res.json({ 'response': { 'status': 'success', 'code': 200, 'message':`${result.length} products found!`, result} });         	
    }
        
  });
};