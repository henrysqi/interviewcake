function reverseStringInPlace(input) {
    let stringArr = input.split("")
    for (let i = 0; i < Math.floor(input.length/2); i++) {
        let temp = stringArr[i]
        stringArr[i] = stringArr[stringArr.length - 1 - i]
        stringArr[stringArr.length - 1 - i] = temp
    }
    return stringArr.join("")
}

console.log(reverseStringInPlace("this is a test"))