const sql = require("./db.js");

// constructor
const Products = function() {
 };

/*
* This API is used to get all product 
* @param: no parameter required
* Return: Fetch all products which are published. 
*/
Products.getAllProducts = (result) =>{

	sql.query(`SELECT * FROM products where status=1`, (err, res) => {
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

module.exports = Products;