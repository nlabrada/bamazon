//// getting required stuff
var mysql = require("mysql");
var inquirer = require("inquirer");

//// info for mysql
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bamazon',
  port: '8889'
});

//// making the connection and calling functions
connection.connect(function(err){
  if (err) throw err;
  console.log("connected as id: " + connection.threadId);
  showAlmostEverything();
});

//// function for showing (almost) everything!
function showAlmostEverything() {
  connection.query("SELECT item_id, product_name, price FROM products", function(err, res){
    if (err) throw err;
    console.log("ITEM ID     PRODUCT                PRICE");
    console.log("----------------------------------------");
    for (i=0; i<res.length; i++){
    var space = "          ";
    var productsArray = [
      res[i].item_id + space,
      res[i].product_name + space,
      res[i].price + space,
    ].join("");
    console.log(productsArray);
    };
  });
};

//// asking the user stuff!
inquirer.prompt([
  {
    name: "askId",
    message: "See anything you like? Just enter the item ID!" 
  },
  {
    name: "askQuantity",
    message: "🆗 how much we talkin'?"
  }
], function( answers ) {
  // Use user feedback for... whatever!!
});