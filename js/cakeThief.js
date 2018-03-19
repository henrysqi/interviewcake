function maxDuffelBagValue(cakeTypes, capacity) {
    let sortedCakeTypes = cakeTypes.sort((a,b) => {
        return (b.value/b.weight) - (a.value/a.weight)
    })
    console.log(sortedCakeTypes)
    let maxValue = 0
    let capacityLeft = capacity

    sortedCakeTypes.forEach(elem => {
        if (capacityLeft === 0) {
            return maxValue;
        }
        let numFits = Math.floor(capacityLeft/elem.weight)
        capacityLeft -= numFits * elem.weight
        maxValue += numFits * elem.value
    });

    return maxValue
}


var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var capacity = 20;

maxDuffelBagValue(cakeTypes, capacity);
// returns 555 (6 of the middle type of cake and 1 of the last type of cake)