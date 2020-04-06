function quickSort(arr) {
    if (arr.length < 1) return arr
    const pivot = arr.splice(Math.floor(arr.length / 2), 1)[0]
    const left = [], right = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    }
    return quickSort(left).concat([pivot], quickSort(right))
}

const arr = [4,6,8,5,9,100,0,12,234,35,132,453,31]
console.log(quickSort(arr))