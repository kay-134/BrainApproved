function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var random = getRandomInt(3);

console.log(random);

function myFunction() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  var random = getRandomInt(5);
  
  var message = document.getElementById("myDIV");
  if (random === 0) {
    message.innerHTML = "You are NOT Brain approved";
  } else if (random === 1){
    message.innerHTML = "You ARE Brain approved";
  } else if (random === 2){
    message.innerHTML = "You will never be Brain approved";
  } else if (random === 3){
    message.innerHTML = "You will always be Brain approved";
  }
  else{
    message.innerHTML = "Y00000000 YOU ARE MORE THAN BRAIN APPROVED";
  }
}

