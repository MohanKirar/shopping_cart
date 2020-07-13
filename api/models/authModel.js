const sql = require("./db.js");

// constructor
const UserAuth = function() {
 };

/*
* This API is used to get all product 
* @param: no parameter required
* Return: Fetch all products which are published. 
*/
UserAuth.getCustomer = (customer_id, result) =>{
  console.log(`Customer isssssssssd: ${customer_id}`);
	sql.query(`SELECT id FROM customers where id=${customer_id} `, (err, res) => {
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

module.exports = UserAuth;