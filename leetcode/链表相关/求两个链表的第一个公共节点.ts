/**
 * 剑指 Offer 52. 两个链表的第一个公共节点
 *  如果两个链表没有交点，返回 null.
    在返回结果后，两个链表仍须保持原有的结构。
    可假定整个链表结构中没有循环。
    程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
 * 
 */

/**
function ListNode(val) {
    this.val = val;
    this.next = null;
}
 */

// 思路：用双指针，分别指向两个链表的头节点
// 对比两个节点是否时同一个节点
// 如果不是，那么两个指针分别执行当前指向链表的下一个节点
// 当遍历到每个链表的最后时，该指针指向两外一个链表的头节点继续遍历

// 最终思路，有点像将另外一个链表拼接到该链表的末尾，这样两个链表的长度就相等了，所以可以一直对该处的节点对比是否相等
// 直到最后

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let preA = headA
    let preB = headB

    // 当两个点没有相等的时候，继续循环
    while(preA != preB) {
        preA = preA === null ? headB : preA.next
        preB = preB  === null ? headA : preB.next
    }
    return preA
};