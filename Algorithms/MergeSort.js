const _mergeArrays = (a, b) => {
  const c = []

  while (a.length && b.length) {
    c.push(a[0] > b[0] ? b.shift() : a.shift())
  }

  //if we still have values, let's add them at the end of `c`
  while (a.length) {
    c.push(a.shift())
  }
  while (b.length) {
    c.push(b.shift())
  }

  return c
}

const mergeSort = (arr) => {
  if (arr.length < 2) return arr
  const middle = Math.floor(arr.length / 2)
  const a_l = arr.slice(0, middle)
  const a_r = arr.slice(middle, arr.length)
  const sorted_l = mergeSort(a_l)
  const sorted_r = mergeSort(a_r)
  return _mergeArrays(sorted_l, sorted_r)
}

console.log(mergeSort([2,6,3,9,1,55,2]));