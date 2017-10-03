var readlineSync = require('readline-sync');
var no1 = readlineSync.questionInt("Please enter a no.");
var no2 = readlineSync.questionInt("Please enter another no.");
var operation = readlineSync.question("Enter + for addition\n Enter - for subtraction\n Enter * for multiplication\n Enter / for division\n");

var add = function (no1,no2) {
	console.log(no2+no1);
};
var sub = function (no1,no2) {
	console.log(no1-no2);
};
var mul = function (no1,no2) {
	console.log(no2*no1);
};
var div = function (no1,no2) {
	console.log(no1/no2);
};
if(operation=='+'){
	add(no1,no2);
}
else if(operation=='-'){
	sub(no1,no2);
}
else if(operation=='*'){
	mul(no1,no2);
}
else if(operation=='/'){
	div(no1,no2);
}
else{
	console.log("Invalid Input");
}