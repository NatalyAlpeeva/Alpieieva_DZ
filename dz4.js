//1
function myIsNaN(argument) {

    if (typeof argument !== 'number') {
      return true;
    }
    return argument !== argument;
  }
  
  console.log(myIsNaN("a"));
  console.log(myIsNaN("qwerty"));
  console.log(myIsNaN(5)) 

  //2. padStartEnd
  function padStartEnd(str, symbol, totalNr, addToStart) {
    let symbolsToAdd = totalNr - str.length;
    if (symbolsToAdd > 0) {
      return addToStart ? symbol.repeat(symbolsToAdd)+ str: str + symbol.repeat(symbolsToAdd);
    }
    return str;
  }


  console.log(padStartEnd("Hello", "-", 5, true));  // "Hello"
  console.log(padStartEnd("Hello", "-", 6, true));  // "-Hello"
  console.log(padStartEnd("Hello", "-", 6, false)); // "Hello-"
  console.log(padStartEnd('cat', '*', 6, false)); //cat***
  
 //3 Check Probability Theory
 function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    if (randomNumber % 2 === 0) {
      evenCount ++;
    } else {
      oddCount ++;
    }
  }

  const totalNumbers = evenCount + oddCount;
  const evenPercentage = (evenCount / totalNumbers) * 100;
  const oddPercentage = (oddCount / totalNumbers) * 100;

  return {
    evenCount: evenCount,
    oddCount: oddCount,
    evenPercentage: evenPercentage,
    oddPercentage: oddPercentage
  };
}

const result = checkProbabilityTheory(10000);
console.log("Even numbers", result.evenCount);
console.log("Odd numbers:", result.oddCount);
console.log("Even in percentage:", result.evenPercentage.toFixed(2) + "%");
console.log("Odd in percentrage:", result.oddPercentage.toFixed(2) + "%");