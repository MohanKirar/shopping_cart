'use strict';

module.exports = function (app) {
	 var customersHandler = require("../controllers/customerController.js");
	 var productsHandler = require("../controllers/productController.js");
	 var addToCartHandler = require("../controllers/cartController.js");
	
	/*-----User Login routes api starts----*/
  	app.route('/customer/login')
		.post(customersHandler.login);
	/*-----User Login routes api ends-------*/

	/*-----product routes api starts--------*/
  	app.route('/products')
		.post(productsHandler.products);
	/*-----product routes api ends----------*/

	/*-----Add to cart routes api starts--------*/
  	app.route('/addtocart')
		.post(addToCartHandler.addToCart);

	app.route('/getcart')
		.post(addToCartHandler.getcart);			
	/*-----Add to cart routes api ends--------*/
};