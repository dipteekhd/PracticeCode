/* Given an array arr of positive integers sorted in a strictly increasing order,
and an integer k.

Find the kth positive integer that is missing from this array.
Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.*/


var findKthPositive = function(arr, k) {
    let prev = 0;
    let curr = arr[0];
    let missingCount = 0;
    for(let i=0;i<arr.length;i++){
        let diff = curr-prev; 
          if(diff !== 1) {
              missingCount += diff-1;
               if(missingCount >= k){
                   let d = missingCount - k + 1;
                  return curr - d; 
               }
          }                   
        prev = arr[i];
        curr = arr[i+1];
    }
    
    if(missingCount < k)
       return arr[arr.length -1] + k - missingCount;
    
    return arr[arr.length -1] + k;

    
};

var findKthPositive1 = function(arr, k) {
    let count = 0;
    let i= 1;
    let map ={}
    for (let e of arr){
        map[e]="1";
    }
    while(count < k){
       if(!map[i]) count++;
        i++;
    }
    return i-1;
};

console.log(findKthPositive([2,3,4,7,11],5));
console.log(findKthPositive1([2,3,4,7,11],5));

