/**
剑指 Offer 25. 合并两个排序的链表
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

示例1：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
限制：
0 <= 链表长度 <= 1000
 */


class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/*  
可以用递归解决这个问题，
- 当l1的第一个节点大于l2的第二个节点时, l1.next等于 l1.next 和 l2中较小的节点，依次递归一直到一方为空,然后返回l1
- 当l2的第一个节点大于l2的第二个节点时, l2.next等于 l1 和 l2.next中较小的节点，依次递归一直到一方为空,然后返回l2
但是需要排除几种情况
2. l1不存在, l2存在, 返回l2
3. l1存在, l2不存在, 返回l1
*/
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
if(l1 == null) return l2
if(l2 == null) return l1
if(l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
} else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
}
};