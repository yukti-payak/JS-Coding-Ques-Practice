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
console.log(countVowels("helloworld"));

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
console.log(checkVowels("helloworld"));