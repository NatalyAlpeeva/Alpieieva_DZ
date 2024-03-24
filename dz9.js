//1
var str = "Тут написано якийсь тект для того, щоб знайти принаймні шість літер які не містять літеру А чи а";
var re = /^(?:[^Aa]*[^\s]){6,}$/

console.log(typeof re);
console.log(str.search(re));
console.log(re.test(str));

//2
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var trustEmails = [];

for (var i=0; i<arr.length; i++) {

    var email = arr[i].email;
    if (/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@[gmail|yahoo]+\.(?:com)$/.test(email)) {
        trustEmails= [...trustEmails, email]
    }
} 

console.log(trustEmails);
