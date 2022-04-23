// function 1 const array(user input)

function beepBoop(text) {
  const userNumber = parseInt(text);
  const finalArray = [];
  for (i = 0; i <= userNumber; i++) {
    finalArray.push(i);
    }
  return finalArray; 
}