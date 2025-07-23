/**
 * 

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 */



//efficient
function moveZeros2(nums) {
    let insertPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }
    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }
    console.log(nums);
}



function swap(arr, start, end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp
}

function moveZeros(nums) {
    let start = 0;
    let end = 1;

    while (end < nums.length) {
        if (nums[start] === 0 && nums[end] !== 0) {
            swap(nums, start, end);
            start++;
            end++;
        }
        if (nums[start] !== 0) {
            start++;
        }
        end = Math.max(end + 1, start + 1);

    }

    return nums;
}


function moveZeros3(nums) {
    //we can track lastNonZeroValue position
    let lastNonZero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            swap(nums, i, lastNonZero);
            lastNonZero++;
        }
    }
    return nums
}

const nums = [0, 1, 0, 3, 12]
const res = moveZeros3(nums)
console.log({ res })