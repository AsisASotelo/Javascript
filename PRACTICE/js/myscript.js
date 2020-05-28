
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
            return[numArray[num], otherNum]
        }
        numObject[numArray[num]] = num
    }
}



array = [1,2,7,11,15]
twoSum(array,9)
console.log(twoSum2(array,9))


// Given a signed integer reverse digits of an integers

var reverse = (x) => {
    if(x.length %2 ==0 ){
        for(i in x){
            x[i] = 
        }
    }
}

