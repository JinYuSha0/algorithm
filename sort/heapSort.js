// 完全二叉树概念:
// 若设二叉树的深度为h，除第 h 层外，其它各层 (1～h-1) 
// 的结点数都达到最大个数，第 h 层所有的结点
// 都连续集中在最左边，这就是完全二叉树。

// 大顶堆概念:
// 父结点的数大于等于子左右结点

function heapSort(arr) {
    // 第一步 讲数组调整为大顶堆
    // [4, 6, 8, 5, 9]
    // 大顶堆形成过程
    //    4    |    4    |    9    |    9
    //  6   8  |  9   8  |  4   8  |  6   8
    // 5 9     | 5 6     | 5 6     | 5 4
    // 结点排序:父结点与所有子结点中最大的结点对比如果最大的子结点大于父结点则替换
    // 从最后一个非叶结点 (Math.floor(arr.length/2) - 1) 开始执行结点排序
    // 从左到右自下到上非叶结点遍历 执行从左到右自上到下执行结点排序

    // k的父结点跟k结点交换后k结点重新排序
    //      3       |      3       |      3       |      15       |      15
    //   6     7    |   6     15   |  13     15   |  13       3   |  13      14
    // 12 13 14 15  | 12 13  14 7  | 12 6   14 7  | 12 6    14 7  | 12 6    3  7
    // i=2; k=6;      i=1; k=4;        i=0; k=2;       i=0; k=5;
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        // 调整堆方法
        adjustHeap(arr, i, arr.length)
    }

    // 替换顶部与尾部的数 将小的数字往堆顶排
    // 对指定尾数之前的非叶结点进行结点排序不影响指定位数
    // 反复执行上面两部操作 小的数字往上冒 大的数字往下换
    for (let j = arr.length - 1; j > 0; j--) {
        swap(arr, 0, j)
        adjustHeap(arr, 0, j)
    }
}

function adjustHeap(arr, i, length) {
    const temp = arr[i]
    // 遍历向下的所有非叶子结点
    for (let k = i * 2 + 1; k < length; k = k * 2 + 1) {
        // 在子结点中寻找最大的数
        if (k + 1 < length && arr[k] < arr[k + 1]) {
            k++
        }
        // 如果字结点中最大的数大于父结点则替换
        if (arr[k] > temp) {
            arr[i] = arr[k]
            i = k   // 更换下一个父结点
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
