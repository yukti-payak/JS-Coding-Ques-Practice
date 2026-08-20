// ques 1 : Reverse a String 
function reverseString(str){
    let result = " ";
    for(let i=str.length-1; i >=0 ; i--){
        result += str[i];
    }

    return result;
}
// console.log(reverseString("yukti"));

// using built-in method
function reverse(str){
    return str.split("").reverse().join("");

}
// console.log(reverse("javascript"));


// ques 2: Check Pallindrome
function checkPallindrome(str){
    let left = 0;
    let right = str.length-1;

    while(left<right){
        if(str[left] !== str[right]){
            return "Not an Pallindrome"
        }

        left++;
        right--;
            
    }
    return "Pallindrome";

}
// console.log(checkPallindrome("madam"));


// ques 3: find largest number 
function findLargest(nums){
       let max = nums[0];

    for(let i=1;i<nums.length;i++){

        if(nums[i] >max){
            max = nums[i];
        }
    }
    return max;

}
// let nums= [2, 7, 4, 8, 9 , 20];
// console.log(findLargest(nums));

//ques 4: find SecondLargest Number
function secondLargest(nums){
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for(let i=0;i<nums.length;i++){
           let current = nums[i];
        if(current > largest){
            secondLargest = largest;
            largest = current;
        } else if(current > secondLargest && current < largest){
            secondLargest = current ;
        }
    }
    return secondLargest;
}
let nums= [2, 7, 4, 8, 9 , 20];
// console.log(secondLargest(nums));


// ques 5: count vowels 
function countVowels(str){
    let count = 0;
    for (let i=0 ;i <str.length;i++){
       let char = str[i].toLowerCase();

       if(char === 'a' || 
          char === 'e' || 
          char === 'i' ||
          char === 'o' || 
          char === 'u'    
       ) {
        count ++;
       }

    }
    return count;
}
// console.log(countVowels("helloworld"));

//using built-in method
function checkVowels(str){
    let count =0;
    let vowels = "aeiou";

    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }

    return count++;
}
// console.log(checkVowels("helloworld"));

// ques 6: implemnet a debounce function in javascript 
function debounce(func, delay){
    let timer ;
  return function (...args){
      clearTimeout(timer);

      timer = setTimeout(() => {
        func(...args);     
      } , delay);
    }
}



//ques 7: Remove Duplicates 
function removeDuplicates(arr){
    let result = [];

    for(let i=0;i <arr.length;i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }

    return result;
}
let arr = [3,5,6,2,3,8,9,3,5]
// console.log(removeDuplicates(arr));

//using Set built-in method optimal solution 
function removeDuplicates(nums){
    return[...new Set(nums)];
}
console.log(removeDuplicates( [3,5,6,2,3,8,9,3,5]));



// const input = document.getElementById("search");
// function searchData(value) {
//     console.log("API Call:", value);
// }

// input.addEventListener("keyup", (e) => {
//     searchData(e.target.value);
// });



// const input = document.getElementById("search");
// function searchData(value) {
//     console.log("API Call:", value);
// }
// function debounce(func, delay) {
//     let timer;
//     return function (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             func(...args);
//         }, delay);
//     };
// }
// const debouncedSearch = debounce(searchData, 500);
// input.addEventListener("keyup", (e) => {
//     debouncedSearch(e.target.value);
// });

// check Anagram 
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const charCounts = {};
  for (let char of s) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  for (let char of t) {
    if (!charCounts[char]) {
     
      return false;
    }
    charCounts[char]--;
  }
  return true;
}
console.log(isAnagram("listen", "silent")); 

//Binary Search
function binarySearch(arr, key){

    let left = 0;
    let right = arr.length - 1;
    while( left <= right){
    let mid = Math.floor( (left + right)/2);
        if(arr[mid] === key){
            return mid;
        }
        else if(arr[mid] > key){
            right--;
        
        }
        else{
            left++;
        }
        
    }
    return -1;
}

// factorial of a number
function factorial(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));

function factorial(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(8));


//fibonacci of a number 
function fibonacciSeries(n) {
  let first = 0;
  let second = 1;

  for (let i = 0; i < n; i++) {
    console.log(first);

    let next = first + second;
    first = second;
    second = next;
  }
}
fibonacciSeries(10);


// sum of array
function sum(arr){

    let total=0;

    for(let num of arr){
        total+=num;
    }

    return total;
}

console.log(sum([1,2,3,4]));


// two sum

function twoSum(arr,target){

    let map={};

    for(let i=0;i<arr.length;i++){

        let diff=target-arr[i];

        if(map[diff]!==undefined){
            return [map[diff],i];
        }

        map[arr[i]]=i;

    }

}

console.log(twoSum([2,7,11,15],9));


function longest(sentence){

    return sentence
    .split(" ")
    .reduce((a,b)=>a.length>b.length?a:b);

}

console.log(longest("I love javascript programming"));

function capitalize(str) {
    return str
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(capitalize("hello world"));


// first repeating non character number 
function firstUnique(str){

    let map={};

    for(let char of str){
        map[char]=(map[char]||0)+1;
    }

    for(let char of str){
        if(map[char]===1){
            return char;
        }
    }

    return null;

}

console.log(firstUnique("aabbcddee"));


function countOccurrences(arr) {
    let obj = {};

    for(let item of arr){
        obj[item] = (obj[item] || 0) + 1;
    }

    return obj;
}

console.log(countOccurrences(["a","b","a","c","b","a"]));

// longest word question
function longest(sentence){

    return sentence
    .split(" ")
    .reduce((a,b)=>a.length>b.length?a:b);

}

console.log(longest("I love javascript programming"));



function missingNumber(arr) {
  const n = arr.length + 1;

  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

console.log(missingNumber([1, 2, 3, 5, 6]));



function debounce(fn, delay) {
  let timerId = null;

  return function (...args) {

    if (timerId) {
      clearTimeout(timerId);
    }


    timerId = setTimeout(() => {
      fn.apply(this, args); 
    }, delay);
  };
}

const handleSearch = debounce((query) => {
  console.log(`Fetching results for: ${query}`);
}, 300);

handleSearch('J');
handleSearch('JS');
handleSearch('JS Code'); 


function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Argument must be an array'));
    }

    const results = [];
    let completedCount = 0;

    if (promises.length === 0) {
      return resolve([]);
    }

    promises.forEach((item, index) => {
     
      Promise.resolve(item)
        .then((value) => {
          results[index] = value; 
          completedCount += 1;

          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error); 
        });
    });
  });
}

const p1 = Promise.resolve(10);
const p2 = new Promise((res) => setTimeout(() => res(20), 100));
const p3 = 30; 

promiseAll([p1, p2, p3])
  .then((data) => console.log(data)) 
  .catch((err) => console.error(err));



function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;

      fn.apply(this, args);
    }
  };
}



  
