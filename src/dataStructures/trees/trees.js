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

// class TreeNode{ 
//     constructor( val = 0, left = null, right = null){
//         this.val = val
//         this.left = left
//         this.right = right


//     }
// }
// const maxDepth = (root) =>{
//     if(!root){
//         return 0
//     }

//     const leftDepth = maxDepth(root.left)
//     const rightDepth = maxDepth(root.right)
//     return Math.max(leftDepth, rightDepth) + 1
// }


// class TreeTrunk{
//     constructor(val = 0, left = null, right = null){
//         this.val = val
//         this.left = left
//         this.right = right
//     }
// }
// const maxDepth = (root) => {
//     if(!root){
//         return 0

//     }

//     const leftDepth = maxDepth(root.left)
//     const rightDepth = maxDepth(root.right)
//     return Math.max(leftDepth, rightDepth)+ 1

// }


// class Tree{
//     constructor(val = 0, left = null, right = null){
//         this.val = val
//         this.left=left
//         this.right = right
//     }
// }
// const maxDepth = (root) =>{
//     if(!root){
//         return 0
//     }
//     let leftDepth = maxDepth(root.left)
//     let rightDepth= maxDepth(root.right)
//     Math.max(leftDepth, rightDepth)+ 1
// }

//treemax, merge and the left right merge index and splice, binary start and end, hashmap, has the empty object and the empty array, 


class Tree {
    //start the value at zero and the left null and right null and declare this? what is this? 
    constructor( val = 0, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
//create a max depth funciton

    const maxDepth = (root) =>{
        if(!root){
            return 0
        }
//
        let leftDepth= maxDepth(root.left)
        let rightDepth = maxDepth(root.right)

       return Math.max (leftDepth, rightDepth) + 1 


    }


    //invert a tree 

    //tree class, root === null, function that is called twice within itself swapping children, 


    class treeNode {
        constructor(val = 0, left = null, right = null){
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    const invertTree = (root) => {
        if(root === null){
            return null;
        }

        [root.left, root.right] = [ root.right, root.left]
//what makes it traverse the tree? and go to the left os it checks to see if the thing it went to,  then you swap them with each other and keep calling on it to see if the root is not null so once root is null than we know there are no more chidlren off that node
        invertTree(root.left)
        invertTree(root.right)

        return root  

    }