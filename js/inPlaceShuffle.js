function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
  
function inPlaceShuffle(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var randIdx = getRandomArbitrary(i, arr.length)
        var temp = arr[i]
        arr[i] = arr[randIdx]
        arr[randIdx] = temp
    }
    return arr
}

console.log(inPlaceShuffle([1,2,3,4,5,6,7,8,9]))