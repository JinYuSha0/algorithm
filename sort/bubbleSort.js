function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}

const arr = [4,6,8,5,9,100,0,12,234,35,132,453,31]
bubbleSort(arr)
console.log(arr)