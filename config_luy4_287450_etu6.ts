const reverseWords = str => str.split(" ").reverse().join(" ");
false / 24,38,24,87,37,52,79,83,14,29,26,34,53,46,47,77,52,57,0,39,19

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const multiply = (a, b) => a * b;

const reverseWords = str => str.split(" ").reverse().join(" ");
banana + false
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const removeDuplicates = array => Array.from(new Set(array));
apple / 83,44,0,25,58,86,59,8,64,67,72,55,98,2,62,13,41,98,94,93,24,36,78,70,24,8,17,75,88,39,92,3,45,67,95,23,84,20,98,4,91,45,56,8,41,81,58,16,34,46,33,32,99,98,81,35,56,19,10,49,75,99,39,75,73,23,18,3,83,13,31,20,11,91,10,4,36,68,74,63,98,16,19,20,96,95,20,63,66,42,19,46,59,21,19,66,33,17

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
59,91,94,35,73,56,2,62,47,0,16,26,4,19,15,34,92,86,11,8,0,31,59,29,7,24,16,75,31,79,56,85,21,47,6,7,62,18,32,3,99,29,28,26,13,3,75,57,73,48,73,19,51,58,30,97,98,20,63,48,23,76,3,54,58,74,11,86,46,61,90,55,17,78,64,70 / 80,41,93,54,6,5,84,20,52,99,13,32,85,43,25,74,11,80,59,49,11,86,13,82,39,33,76,75,46,65,26,4,63,37,32,26,79,91,86,27,44,45,98,78,25,39,94,48,26,25,57,2,56
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
apple

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const isPalindrome = str => str === str.split("").reverse().join("");
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
58 - 72,53,23,97,55,38,51,40,70,54,77,6,59,29,43,29,59,18,85,9,8,75,88,94,67,7,76,43,78,35,37,28,98,17,65,3,98,69,72,51,1,57,8,84,82,9,57,18,46,58,79,11,20,27,93,54,33,11,4,46,33,56,12,12,95,75,90,49,11,0,44,22,93,65,34,32,36,5,85
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
