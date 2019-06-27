function GetSum(a, b) {
    result = []
    total = 0
    if (a === b) {
        return a
    } else {
        for (let i = a; i <= b; i++) {
            result.push(i)
        }
        for (let i = 0; i < result.length; i++) {
            total += result[i]
        }
        return total
    }
}