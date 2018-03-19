function checkSentence(sentence, inputnum) {
	var pairs = {}
	var stack = []
	for (var i = 0; i < sentence.length; i++) {
		if (sentence[i] === "(") {
			stack.push(i)
			pairs[i] = null
		} else if (sentence[i] === ")") {
			pairs[stack.pop()] = i;
		}
		if (pairs[inputnum]) {
			console.log(pairs[inputnum])
			return pairs[inputnum];
		}
	}
}

checkSentence("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10)