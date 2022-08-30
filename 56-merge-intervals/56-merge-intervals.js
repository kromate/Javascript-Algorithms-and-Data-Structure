/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/**
- declare a result array with the first elem of the interval
- sort the interval using the first values of the subArray
- loop through the sorted interval starting from the second subArray
- within the loop get the start and end elem of the sub and compare with the previous
- If previous interval ends after current item start, then merge
    steps to merge
    - get the second elem of the result array and store it with a temp val
    - set the new second elem to the max between end and temp val
- else push the whole array to result

*/

var merge = function (intervals) {
  // Sort the intervals
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    // If previous interval ends after current item start, then merge
    if (res[res.length - 1][1] >= start) {
      const lastEnd = res[res.length - 1][1];
      // Update the ending time of new interval as the maximum of last interval's end and current interval end
      res[res.length - 1][1] = Math.max(lastEnd, end);
    } else {
      // If previous interval ends before current item start, then simply add this interval in result array.
      res.push([start, end]);
    }
  }
  return res;
};