//TWO SUM
// Given an array of integers, return indices of the two number such that they add up to a specific
// target

var twoSum = (nums,target) => {

    for(let i in nums) {
        for(let j in nums){
            if((nums[i] + nums[j] == target) && j !== i){
                return [i,j]
            }
        }
    }


}

// Print an Array with Elems on the Same Line


var printerArr = (str) => {
    let stringToPrint=str.join("")

    console.log(stringToPrint)
}

sample_str = ["Hello ", "Asis ", " you", " did"," well."]
printerArr(sample_str)


var twoSum2 = (numArray,target) =>{
    const numObject = {}

    for(let num in numArray) {
        const otherNum = target - numArray[num]

        //Could also use the numObject.has()
        //To get the value of the indexed value use the numberIndex.get(complement)

        if(otherNum in numObject){
            return[numObject[num], otherNum]
        }
        numObject[numArray[num]] = num
    }
}



array = [1,2,7,11,15]
twoSum(array,9)
console.log(twoSum2(array,9))


// Given a signed integer reverse digits of an integers

var reverse = (x) => {
    newArray= []
    for(let i=x.length-1;i >=0;i--){
        newArray.push(x[i])
    }
    return newArray
}

console.log(reverse(array))

var fizzbuzz = (n) => {
    let arr = []


    for(let i = 1; i <= n; i++){
        if( i % 15===0){
            arr.push("Fizzbuzz")
        }else if(i % 5=== 0){

            arr.push("buzz")

        }else if (i % 3 ===0){
            arr.push("Fizz")
        }else{
            arr.push(i.toString())
        }

    }

    arr.forEach(x => {
        console.log(x)
    })

}

fizzbuzz(20)

//Reverse Bits

//####################################################################################
// Here the parseInt converts a string x into a number base 10 the sign is handled
// by the Math.sign() function
//####################################################################################
const reverseBits = (x)=> {
    if( x<1534236469 && x >= -2147483412){
        return parseInt(x.toString(10).split("").reverse().join(""),10) * Math.sign(x)
        }else{return 0}
}




const pageTitle = document.querySelector(".box") // First element with the h2 tag

console.log(pageTitle)
console.log(reverseBits(
    -1563847412))


// Palindrome (Easy)

//####################################################################################
// Here the reversal is done same as before with the split/reverse/join function of the
// string and array function
//####################################################################################

var isPalindrome = function(x) {
  
    const reversed = x.toString(10).split("").reverse().join("")
    console.log(reversed)
    return reversed === x.toString(10)
 
}

var isPalindromeV2 = function(x){
    
    x = x.toString().split("")

    arr_idx = x.length - 1
    console.log("x.length is " + x.length)
    console.log("arr_idx" + arr_idx)
    
    // Must implement this for even numbers

    for(let i = 0; i <=  Math.floor(x.length/2); i++){
        
     if( !(x[i] === x[arr_idx - i]) ){
         return false
     }
     
           
    }
    return true
}

console.log(isPalindromeV2(1111))

// Roman to Integer

var romanToInteger = (s) => {

    let romanToInt = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    
    };

    let total = 0;
    for(let i = 0; i<s.length;i++){
        let curr = romanToInt[s.charAt(i)];
        let next = romanToInt[s.charAt(i+1)];

        if(next){
            if(curr >= next) {
                total += curr;

            } else {
                total += (next - curr);
                i++;
            }
        
        
        }else {
                total += curr;
            }
    }

    return total;
    

}

console.log(romanToInteger("MCMXCVI"))

// Add two numbers, Given two linked list, add two numbers

var addTwoNums = function(l1,l2){

    let dummyHead = new ListNode[0];
    let p1 = l1;
    let p2 = l2;

    let current = dummyHead;

    let carry = 0;

    while(p1 !== null || p2 !== null){
        let x = (p1 !==null) ? p1.val: 0;
        let y = (p2 !==null) ? p2.val: 0;

        let sum = x + y + carry;

        carry = Math.floor(sum /10);

        current.next = new ListNode(sum % 10);
        current= current.next;

        if (p1 !==null) {
            p1 = p1.next;
        }

        if (p2 !==null) {
            p2 = p2.next;
        }


    }

    if(carry>0){
        current.next = new ListNode(1);
    }

    return dummyHead.next;

}

// Longest Substring without given characters

var lengthOfLongest = (s) => {
    let set = new Set
    let left = 0;
    let right = 0;
    let max_substring = 0;

    while (right < s.length){
        if(!set.has(s.charAt(right))){

            set.add(s.charAt(right));

            max_substring = Math.max(max_substring,set.size)
            right++;


        }else {
            set.delete(charAt(left))
            left++;
        }

    }
    return max_substring

}


// This implements the sliding window technique 


// #14 Longest Common Prefix


var longestCommonPre = function(s){
    let longest ='';

    // First check if strs is not zero
    if(s.length === 0 ) {
        return longest
    }

    let compare_word = s[0];
    let compare_idx = 0;
    
    for(let compare_letter of compare_word){
        for(let i = 1; i<s.length;i++) {
            let curr_word = s[i]
            let curr_letter = curr_word.charAt(compare_idx)

            if(compare_letter !== curr_letter || compare_idx > curr_word.length) {
                return longest;
            } 
        }
        comparisonIndex++;
        longest += compare_letter
    }

    return longest;
}


// Valid Palindrom


// Algorithms 

