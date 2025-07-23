/**
 * Given an array of integers nums, return the value of the largest element in the array

https://takeuforward.org/plus/dsa/problems/largest-element
Examples:
Input: nums = [3, 3, 6, 1]

Output: 6

Explanation: The largest element in array is 6

Input: nums = [3, 3, 0, 99, -40]

Output: 99

Explanation: The largest element in array is 99
 */


function LargestElement(nums) {
    let largest = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    return largest
}

const nums = [3, 3, 0, 99, -40];

const result = LargestElement(nums);
console.log({ result });