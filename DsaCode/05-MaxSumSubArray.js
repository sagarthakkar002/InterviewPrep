/**
 * 53. Maximum Subarray
 * 
 * https://leetcode.com/problems/maximum-subarray/description/
Medium
Topics
premium lock icon
Companies
Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 */

//brute force
//O(n2)
function maxSumSubArray(nums) {
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let tempSum = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            tempSum += nums[j];
            maxSum = Math.max(maxSum, tempSum);
        }
    }

    return maxSum;
}

//Kadane Algo
/**
 * currSum rakho, maxSum rakho
 * kabhi bhi bada negative number hai current sum se toh number will reduce only (e.g 3 me -4 daalo ya -2 me -4 daalo)
 * kabhi bhi aapka sum negative hua toh reset to 0
 * so ignore that value and reset current sum to 0
 * in this one last condition must be at bottom
 */
function maxSumSubArray2(nums) {
    let maxSum = -Infinity;

    let currSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        maxSum = Math.max(currSum, maxSum)
        if (currSum < 0) {
            currSum = 0;
        }
    }
    return maxSum;
}


//safe version of above
function maxSumSubArray3(nums) {
    let maxSum = nums[0];
    let currSum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        currSum = Math.max(nums[i], currSum + nums[i])
        maxSum = Math.max(currSum, maxSum)
    }
    return maxSum;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSumSubArray3(nums);
console.log(result);  // Output: 6

