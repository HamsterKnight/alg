/* 剑指 Offer 57. 和为s的两个数字

输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]
 */

/* 思路：
    因为是有序数组，所以利用双指针begin指向头结点， end指向尾结点
    有三种情况
    1.两者相加大于目标值， end--
    2.两个相加小于目标值， begin++
    3.两者相加等于目标值

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let begin = 0
    let end = nums.length - 1
    while(begin < end) {
        let sum = nums[begin] + nums[end]
        if(sum > target) {
            end--
        }
        if(sum < target) {
            begin++
        }
        if(sum === target) {
            return [nums[begin], nums[end]]
        }
    }
    return []
};