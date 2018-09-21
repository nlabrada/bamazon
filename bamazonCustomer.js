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
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id: " + connection.threadId);
  showAlmostEverything();
});

//// function for showing (almost) everything!
function showAlmostEverything() {
  connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
    if (err) throw err;
    console.log("ITEM ID     PRODUCT                PRICE");
    console.log("----------------------------------------");
    for (i=0; i<res.length; i++) {
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
  },
]).then(function(checking) {
  connection.query("SELECT * FROM products WHERE item_id=?", [checking.askId], function(err, res){
    var invalid = /[a-z]/gi;
    if (err) throw err;
    if (res === invalid || res.length ===0) {
      console.log("dang, enter a number next time");
      connection.end();
    } else {
      buyThatThing(res[0], checking.askQuantity);
    };
  });
});

//// buying the item and updating db!

function buyThatThing(res, askQuantity) {
  if (askQuantity > res.stock_quantity) {
    console.log("sorry, my dude. not enough in-stock!");
    connection.end();
  } else if (askQuantity <= res.stock_quantity) {
    connection.query("UPDATE products SET stock_quantity=? WHERE item_id=?", [parseFloat(res.stock_quantity) - askQuantity, res.item_id], function(err){
      if (err) throw err;
    });
    var total = parseInt(askQuantity) * parseFloat(res.price);
    console.log("nice choice! it's all yours 😎 Your total comes out to $" + total);
    connection.end();
  };
};
