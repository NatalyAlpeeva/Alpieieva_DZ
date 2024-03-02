/*var name = prompt ("Вкажіть ваше імя", "18");
console.log(typeof name, Number(name));
if() */

var age = prompt("Вкажіть ваш вік", "1" );
console.log(typeof age, Number(age));

let lastDigit = age % 10;
if (age <= 0) {
    console.log("Digit can't be 0 or negative")
} else if (age >= 10 && age <= 19) {
	console.log(age + " років")
} else if (lastDigit == 0) {
	console.log(age + " років")
} else if (lastDigit == 1) {
	console.log(age + " рік")
} else if (lastDigit >= 2 && lastDigit <= 4) {
	console.log(age + " роки")
} else {
	console.log(age + " років")
}