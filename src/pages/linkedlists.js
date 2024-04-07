// const n1 = {
//     data: 100
// }

// const n2 ={
//     data: 200
// }

// n1.next = n2; 


// console.log(n1);

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

// const n1 = new Node(100);
// console.log(n1)

class LinkedLists {
    constructor() {
        this.head = null;
        this.size= 0;


    }


//insert frst node
    insertFirst(data){
        this.head = new Node(data, this.head);
    }



//insert last node

//insert at index 

// get at index

// remove at index

//clear list

//print list data

printListData(){
    let current = this.head; 

    while(current){
        console.log(current.data);
        current = current.next;
    }
}
}

const ll = new LinkedLists();

ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)

ll.printListData();
