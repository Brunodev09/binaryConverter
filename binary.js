var user = prompt("Please, input a decimal number to convert to the binary base:");
var storeNum = Number(user);
var storeRemainder = [];
var rest;
var invertedArrayToBinary = [];

binaryConverter(storeNum);

if (invertedArrayToBinary.length > 0) {
	alert(invertedArrayToBinary);
}

function binaryConverter(input) {
	while (input >= 1) {
		rest = input % 2;
		input = Math.floor(input/2);
		storeRemainder.push(rest);
		invertedArrayToBinary.push(storeRemainder.pop());
	} return invertedArrayToBinary;
}