/**
 * 
Code
Testcase
Test Result
Test Result
125. Valid Palindrome
Easy
Topics
premium lock icon
Companies
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 */

function isAlphanumeric(char) {
    return char.length === 1 && (
        (char >= 'A' && char <= 'Z') ||
        (char >= 'a' && char <= 'z') ||
        (char >= '0' && char <= '9')
    );
    // return /^[a-zA-Z0-9]$/.test(char);
}

function validPalindrome(str) {
    let lowerCase = str.toLowerCase();
    let newStr = ''
    for (let i = 0; i < lowerCase.length; i++) {
        if (isAlphanumeric(lowerCase[i])) {
            newStr += lowerCase[i]
        }
    }
    const data = newStr.split('').reverse().join("")
    return newStr === data

}


const str = "A man, a plan, a canal: Panama"
const res = validPalindrome(str);
console.log({ res })