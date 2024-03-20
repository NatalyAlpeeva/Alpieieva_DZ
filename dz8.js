//1
var myCar = {
    manufacturer: "VW",
    model: "T-ROC",
    color: "white",
    configuration: {
        saloon: "sport",
        headlights: "LED",
        assistant: "parking"
    },
    getInfo() {
        for (let key in myCar) {
            if (typeof myCar[key] !== 'function') { 
                console.log(key + ': ' + myCar[key]);
            }
        }
    }
}

myCar.getInfo();


myCar.type = "crossover";
myCar.getInfo();

//2
var services = {

	"стрижка": "60 грн",

	"гоління": "80 грн",

	"Миття голови": "100 грн",
};

services['Розбити скло'] = "200 грн";

services.price = function() {
    let totalPrice = 0;
    for (let key in services) {
        if (typeof services[key] === 'string') {
            totalPrice += parseInt(services[key].replace(' грн', ''));
        }
    }
    return totalPrice;
};

services.minimumPrice = function() {
    let minPrice = Number.MAX_SAFE_INTEGER;
    for (let key in services) {
        if (typeof services[key] === 'string') {
           minPrice = Math.min(minPrice, parseInt(services[key].replace(' грн', '')))
       }
    }
    return minPrice;
};

services.maximumPrice = function() {
    let maxPrice = 0;
    for (let key in services) {
        if (typeof services[key] === 'string') {
            maxPrice = Math.max(maxPrice, parseInt(services[key].replace(' грн', '')))
        }
    }
    return maxPrice;
}


console.log("Загальна вартість послуг: " + services.price() + " грн");

console.log("Min вартість послуг: " + services.minimumPrice() + " грн");

console.log("Max вартість послуг: " + services.maximumPrice() + " грн");



