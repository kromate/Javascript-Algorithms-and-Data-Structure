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
- return result
*/
var merge = function(intervals) {
    intervals.sort((a,b)=> a[0]-b[0])
    const result = [intervals[0]]
    
    for(let i=1; i<intervals.length; i++){
      const [start, end] = intervals[i]
      
      if(result[result.length-1][1] >= start){
          lastEnd = result[result.length-1][1]
          
          result[result.length-1][1] = Math.max(lastEnd, end)
      }else{
          result.push(intervals[i])
      }
        
    }
    
    return result
};