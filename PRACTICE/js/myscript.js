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


var twoSum2 = (numArray,target) =>{
    const numObject = {}

    for(let num in numArray) {
        const otherNum = target - numArray[num]

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

    console.log(arr)

}

fizzbuzz(20)

// Contains duplicates


const mirror_bits = (n) => {
    return n.toString().split("").reverse().join()
}

console.log(mirror_bits(1101000))

const pageTitle = document.querySelector(".box") // First element with the h2 tag

console.log(pageTitle)

