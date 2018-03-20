function permutationPalindrome(word) {
    let seen = {}
    for (let i = 0; i < word.length; i++) {
        if (seen[word[i]]) {
            seen[word[i]]++
        } else {
            seen[word[i]] = 1
        }
    }
    if (word.length % 2 === 0) {
        for (let key in seen) {
            if (seen[key] % 2 !== 0) {
                return false
            }
        }
        return true
    } else {
        let seenOdd = false
        for (let key in seen) {
            if (seen[key] % 2 !== 0) {
                if (!seenOdd) {
                    seenOdd = true
                } else {
                    return false
                }
            }
        }
        return true
    }
}

console.log(permutationPalindrome("ivcic"))
console.log(permutationPalindrome("ivcdic"))
console.log(permutationPalindrome("racecra"))
console.log(permutationPalindrome("racecars"))