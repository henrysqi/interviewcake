function makeChange(target, coins) {
    let combinations = new Array(target+1).fill(0);
    combinations[0] = 1
    coins.forEach(elem => {
        for (let amount = 1; amount <= target; amount++) {
            if (amount >= elem) {
                combinations[amount] += combinations[amount-elem]
            }
        }
    })
    return combinations[target]
}

console.log(makeChange(12, [1,2,5]))
console.log(makeChange(4, [1,2,3]))
