// https://leetcode.com/problems/contains-duplicate/description/

/**
 * 217. Contains Duplicate
Easy
Topics
premium lock icon
Companies
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true
 */


function containsDuplicate(arr) {
    const seen = new Map();
    for (let ele of arr) {
        if (seen.has(ele)) {
            return true
        } else {
            seen.set(ele, 1)
        }
    }
    return false
}


const arr = [1, 2, 2, 3]
const result = containsDuplicate(arr)
console.log({ result })