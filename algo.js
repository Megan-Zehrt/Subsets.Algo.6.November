// 78. Subsets



// Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.





/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    let results = []

    function helper(index, temp){

        results.push([...temp])

        for(let i = index; i < nums.length; i++){

            temp.push(nums[i])
            helper(i + 1, temp)
            temp.pop()
        }

    }

    helper(0, [])
    return results
};