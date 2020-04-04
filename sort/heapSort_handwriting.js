function heapSort(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        adjustHeap(arr, i, arr.length)
    }

    for (let j = arr.length - 1; j > 0; j--) {
        swap(arr, 0, j)
        adjustHeap(arr, 0, j)
    }
}

function adjustHeap(arr, i, length) {
    const temp = arr[i]
    for (let k = i * 2 + 1; k < length; k = k * 2 + 1) {
        if (k + 1 < length && arr[k + 1] > arr[k]) {
            k++
        }
        if (arr[k] > temp) {
            arr[i] = arr[k]
            i = k
        } else {
            break
        }
    }
    arr[i] = temp
}

function swap(arr, i1, i2) {
    const temp = arr[i1]
    arr[i1] = arr[i2]
    arr[i2] = temp
}

const arr = [4,6,8,5,9,100,0,12,234,35,132,453,31]
heapSort(arr)
console.log(arr)