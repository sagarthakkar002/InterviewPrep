// Given an array of integers nums, return the second-largest element in the array. If the second-largest element does not exist, return -1.
// https://takeuforward.org/plus/dsa/problems/second-largest-element//

// Examples:
// Input: nums = [8, 8, 7, 6, 5]

// Output: 7

// Explanation: The largest value in nums is 8, the second largest is 7

// Input: nums = [10, 10, 10, 10, 10]

// Output: -1

// Explanation: The only value in nums is 10, so there is no second largest value, thus -1 is returned

function SecondLargest(nums) {
    let largest = -1;
    let secondLargest = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
        if (nums[i] < largest && nums[i] > secondLargest) {
            secondLargest = nums[i];
        }
    }
    return secondLargest
}

const nums = [10, 10, 10, 10, 10];

const result = SecondLargest(nums);
console.log({ result });