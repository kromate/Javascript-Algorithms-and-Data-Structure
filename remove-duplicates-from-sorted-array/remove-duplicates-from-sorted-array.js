/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let current;
   for(let i=nums.length; i--;){
       if(current === nums[i]){
           nums.splice(i,1)
       }else{
           current = nums[i]
       }
   }
   
};