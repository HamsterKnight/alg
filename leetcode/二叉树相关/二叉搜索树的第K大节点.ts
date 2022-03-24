// 给定一棵二叉搜索树，请找出其中第 k 大的节点的值。
/**
    输入: root = [3,1,4,null,2], k = 1
     3
    / \
    1   4
    \
    2
    输出: 4
 */
/**
 * 思路：利用二叉树的中序遍历,将值都按从小到大存进一个数组中，然后反过来取值
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function(root, k) {
    let result = []
    let link = (root) => {
        if(!root) return
        link(root.left)
        result.push(root.val)
        link(root.right)
    }
    link(root)
    return result[result.length - k]
};