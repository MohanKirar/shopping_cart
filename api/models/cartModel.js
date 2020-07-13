const sql = require("./db.js");

// constructor
const Cart = function(item) {

 };

/*
* This API is used to add/update product in cart. 
*/
Cart.addProductToCart = (post, result) =>{
	
	// check whether product already added to cart.
	sql.query(`SELECT qty FROM cart where customer_id =${post.customer_id} and product_id=${post.product_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
    	var total_qty  = res[0].qty+ post.qty;
    	
    	// update product in cart
    	update_product(post, total_qty, result)
			    .then(function(rows){
			        if (rows) {
			            result(null,`${rows}`);
			        }
			    })
			    .catch(function(e)
			    	{
			    		console.log("Catch handler " + e);
			    		result({ kind: "not_found" }, null);
			    	});

      return;
    }else{
    // add product to cart 
    save_product(post, result)
    .then(function(rows){
        if (rows) {
            result(null,`${rows.insertId}`);
        }
    })
    .catch(function(e)
    	{
    		console.log("Catch handler " + e);
    		result({ kind: "not_found" }, null);
    	});
    	return;
	}
  });
};

function save_product(post, result='')
{
    return new Promise(function(resolve, reject){
          sql.query("INSERT INTO cart SET ?", post, function (err, res) {
            if (err) {
                //throw err;
                console.log(err);
                reject(err);
            }
            else {
            	console.log(res.insertId);
                resolve(res);
                
            }
        }); 
    });
}


function update_product(post, total_qty, result='')
{
    return new Promise(function(resolve, reject){
          sql.query("UPDATE cart SET qty = ? WHERE customer_id = ? and product_id=? ", [total_qty, post.customer_id, post.product_id], function (err, res) {
            if (err) {
                //throw err;
                console.log(err);
                reject(err);
            }
            else {
            	console.log(res.insertId);
                resolve(res);
                
            }
        }); 
    });
}

/*
*
* This API is used to get all product 
* @param: no parameter required
* Return: Fetch all products which are published. 
*/
Cart.getProductFromCart = (customer_id, result) =>{

   
    sql.query(`SELECT cart.id as cart_id,cart.qty, products.id as product_id,  products.title, products.prod_description,  products.price, products.make, products.image   FROM cart inner join products ON (cart.product_id=products.id) where customer_id=${customer_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res);
      return;
    }
   
    result({ kind: "not_found" }, null);
  });
};

module.exports = Cart;

