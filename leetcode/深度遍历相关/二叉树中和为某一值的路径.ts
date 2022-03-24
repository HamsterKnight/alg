/**
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

    叶子节点 是指没有子节点的节点。

    输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
    输出：[[5,4,11,2],[5,8,4,5]]
    提示：

    树中节点总数在范围 [0, 5000] 内
    -1000 <= Node.val <= 1000
    -1000 <= targetSum <= 1000
 */

    /**
     * 思路： 从根节点开始遍历，找出所有到叶子节点的路径的集合，然后判断每条路径的点是否符合规则，将符合规则的返回
     * 1.将根节点的值存进一个数组中[root.val]
     * 2.将根节点的左子树和右子树分别存进该数组的一个副本中[root.val, root.left.val]   [root.val, root.right.val]
     * 3.接下来每个节点的左右子树都重复第二步操作
     * 对每个节点都要判断是否为叶子节点,如果是叶子节点则将该路径加入到一个数组中
     * 当节点为空时返回null,
     * 
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

// 求数组每一项的和
 function sum (arr: number[] | null) {
    if(!arr || arr.length == 0) return 0
    return arr.reduce((a, b) => a + b, 0)
}
// 判断一个点是否是叶子节点
function isLeaf(node: TreeNode) {
    return !node.left  && !node.right
}

function pathSum(root: TreeNode | null, target: number): number[][] {
    if(!root) return []
    let result = []
    function sumToTarget(node: TreeNode | null, arr: any) {
        if(!node) return arr
            node.left && sumToTarget(node.left, arr.concat([node.left.val]))
            node.right && sumToTarget(node.right, arr.concat([node.right.val]))
            if(isLeaf(node)) {
                sum(arr) === target && (result.push(arr))
            }
        }
    sumToTarget(root, [root.val])
    return result
};