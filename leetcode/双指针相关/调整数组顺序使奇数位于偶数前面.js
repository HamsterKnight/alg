

/**
 * 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
 * 
 * 输入：nums = [1,2,3,4]
 * 输出：[1,3,2,4] 
 * 注：[3,1,2,4] 也是正确的答案之一。
 */

/* 
    解题思路：
        1. 利用双指针，记录数组开始begin和数组结束end的位置
        2. 当开始位置的值是奇数bengin++,一直找到第一个偶数， 前提是begin < end
        3. 当结束位置的值是偶数end--， 一直找到第一个奇数, 前提是begin < end
           为了避免多次循环，所以每次比对的时候，都要判断bengin位置上是否是偶数，同时end的位置上是否奇数，如果是则交换
*/





function change(nums, a, b) {
    var temp = nums[b]
    nums[b] = nums[a]
    nums[a] = temp
}

var nums = [1, 2, 3, 5]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let begin = 0
    let end = nums.length - 1
    while(begin < end) {
        // 获取第一个偶数位置
        if(nums[begin] % 2 == 0 && nums[end] % 2 != 0) {
            change(nums, begin, end)
        }
        if(nums[begin] % 2 != 0) {
            begin++
        }
        if(nums[end] % 2 == 0) {
            end--
        }
    }
    return nums
};


exchange(nums)
console.log(nums)