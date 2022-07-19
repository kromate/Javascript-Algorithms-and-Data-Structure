const QuickSort = (arr) =>
{
    let list = [...arr]
    if (list.length < 2) {
        return list
    } else {
        let pivot = list[0]
        let less = list.filter((item) => item < pivot)
        let greater = list.filter((item) => item > pivot)
         return [...QuickSort(less), pivot, ...QuickSort(greater)]
    }
}

console.log(QuickSort([2,6,3,9,1,55,2]));