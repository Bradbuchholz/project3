function beepBoop(text) {
  const userNumber = parseInt(text);
  const finalArray = [];
  for (i = 0; i <= userNumber; i++) {
    finalArray.push(i);
  }
  return modifyArray(finalArray); 
}

function modifyArray(numArray) {
  const beepArray = [];
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i].toString().includes("3")) {
      beepArray.push("Won't you be my neighbor");
    } else if (numArray[i].toString().includes("2")) {
      beepArray.push("Boop!");
    } else if (numArray[i].toString().includes("1")) {
      beepArray.push("Beep!"); 
    } else {
      beepArray.push(numArray[i]);
    }
    
  }
  return beepArray;
}
$(document).ready(function() {
  $("form#hood").submit(function(event) {
    event.preventDefault();
    const userInput = $('#numbers').val();
    console.log(userInput);
    $('#output').text(beepArray(userNumber));
  });
});