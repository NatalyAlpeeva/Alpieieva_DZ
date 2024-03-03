let unitOfMeasure = "decimeter";
let quantity = 60;


switch (unitOfMeasure) {
    case 'kilometers':
        console.log(quantity + " " + unitOfMeasure + " is " + quantity * 1000 + " m");
    break;
     case 'kilograms':
        console.log(quantity + " " + unitOfMeasure + " is " + quantity * 1000 + " g");
    break;
    case 'hours':
        console.log(quantity + " " + unitOfMeasure + " is " + quantity * 60 + " min");
    break;
    default:
        console.log("Please enter quantity of kilograms, hours or kilometers to calculate")

}