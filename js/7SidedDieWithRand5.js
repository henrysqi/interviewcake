function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

function rand5() {
  return Math.floor(getRandomArbitrary(1,6))
}

function rand7() {
  var bin = "";
  for (var i = 0; i < 3; i++) {
    var temp = rand5();
    while (temp === 5) {
      temp = rand5()
    }
    if (temp === 1 || temp === 2) {
      bin += "0"
    } else {
      bin += "1"
    }
  }
  if (bin === "000") {
  	return rand7()
  } else {
  	return parseInt(bin, 2)
  }
}

console.log(rand7())
console.log(rand7())
console.log(rand7())
console.log(rand7())
console.log(rand7())
console.log(rand7())
console.log(rand7())
console.log(rand7())
console.log(rand7())
console.log(rand7())
