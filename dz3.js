//1.
//first option
/*function drawTriangle(hight, symbol) {
    let i= 0;
    let result = 0;
    do {
        i ++;
        result=`${symbol.repeat(i)}`;
        console.log(result);
      } while (i < hight);
}
drawTriangle(5, "*")*/

//second option
/*function drawTriangle(hight, symbol) {
    let i;
    for (i=0; i<= hight; i++) {
        console.log(`${symbol.repeat(i)}`)
    }
}
drawTriangle(5, "*") */

//2.
   
  /*  let result=0;
    const number=100;

    for (let i=1; i<=number; i++) {
       if(i%3 != 0) {
        result += i;
       }
}
console.log(`sum of numbers that is not divided by 3 is: `, result); */

//3
function pow(firstNum, secNum) {
    let result=1;
    for (let i=1; i<=secNum; i++) {
        result= result * firstNum;
    }
    console.log(result);
}

pow(4,3);

