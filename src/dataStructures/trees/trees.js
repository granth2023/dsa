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

//how do i determine if a tree is symmetrical? 
// declare a tree node class
//create 2 functions -- the first handles the root, an returns the secon dfunctions calling the root on left and right
//the second function passes the values and we use 3 if statements accounting for && || of null value and when to return false -- then recursively call this function twice  --> 


// class treeBase{
//     constructor( val = 0, left = 0, right = 0){
//         this.val = val
//         this.left = left;
//         this.right = right;
//     }
// }

// function isSymmetric(root){
//     if(root == null)return true; 
//     return isMirror(root.left, root.right)
// }

// function isMirror(left, right) {
//     if((root.left == null) && (root.right == null)) return true;
//     if((root.left == null) || (root.right == null)) return false;
//     if(root.left !== root.right) return true;
//     return isMirror((left.left, right.right) && (left.right, right.left) )


// }


class trees{
    constructor(val = 0, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// function isSymmetric(root){
//     if(root == null)
//         return true;
//         return isMirror(root.left, root.right);
// }

// function isMirror(left,right){
//     if( left == null && right == null) return true;
//     if( let == null || right == null ) return false;
//     if( left.val !== right.val) return false;
// return isMirror(left.)

// }

//symmetry? how many funcitons do we need? how many times do we call 2nd function?
class trees{
    //create possible tree
    constructor(val = 0, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isSymmetric(root){
  //how do we return if null is root? what do we run to see if there is mirror on children? 
    if(root == null) return true;
    return isMirror(root.left, root.right)
}
function isMirror(left, right){
    // is it mirroring when either are null or have different values? 
    if( left == null && right == null)return true; 
    if( left == null || right == null)return false;
    if( left.val !== right.val) return false;
    //how do we compare the mirror? think of a stack? 
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}

//binary tree traversal 