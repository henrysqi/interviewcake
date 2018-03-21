function mergingMeetingTimes(arr) {
    let result = [];
debugger
    for (let i = 0; i < arr.length; i++) {
        if (result.length === 0) {
            result.push(arr[i])
        } else {
            var intersect = false;
            for (let j = 0; j < result.length; j++) {
                if (arr[i].startTime >= result[j].startTime && 
                    arr[i].startTime <= result[j].endTime && 
                    arr[i].endTime >= result[j].endTime) {
                    result[j].endTime = arr[i].endTime
                    intersect = true;
                    break
                } else if (arr[i].endTime >= result[j].startTime &&
                    arr[i].endTime <= result[j].endTime &&
                    arr[i].startTime <= result[j].startTime) {
                    result[j].startTime = arr[i].startTime
                    intersect = true;
                    break
                }
            }
            if (!intersect) {
                result.push(arr[i])
            }
        }
    }
    return result
}

const test =   [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]

console.log(mergingMeetingTimes(test))