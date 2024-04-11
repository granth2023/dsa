//max depth of a tree

//2 class, 3 const, 2 return, a math max passing two variable above, 3 max depth, 4, root, 4 left, 4, right, 3 this, 3 vall, 2 null, a constructor, a + 1, , an arrow function, a zero, 

//val gets a zero, val sets itself, could of had that, also missing brack, max depth declaration of a variable why have paraehentic, you need to call your root on the left and right, 

// class TreeNode{
//     constructor( val  left = null right = null ){
//         this.val 
//         this.left = left
//         this.right = right
//     }


// const(maxDepth) = (root) => {


// if(!root){
//     return 0
// }
//     const rightDepth = maxDepth(left)
//     const leftDepth= maxDepth(right)
//     return Math.Max(leftDepth, rightDepth) + 1
// }

// }

class TreeNode{ 
    constructor( val = 0, left = null, right = null){
        this.val = val
        this.left = left
        this.right = right


    }
}
const maxDepth = (root) =>{
    if(!root){
        return 0
    }

    const leftDepth = maxDepth(root.left)
    const rightDepth = maxDepth(root.right)
    return Math.max(leftDepth, rightDepth) + 1
}