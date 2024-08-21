// Data Structures: Doubly Linked Lists
// On a linked list, each node contains an indicator to its next node. 
// On a Doubly Linked List, each node also contains an indicator to the PREVIOUS node.

class Node {
    constructor(data){
        this.data = data 
        this.next = null
        this.previous = null // !!! 
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null // first node
        this.tail = null // last node
        this.size = 0
    }

    add(data){
        let newNode = new Node(data)
        if (this.head === null){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        }

        this.size++
    }

    insertAt(data, index){
        if(index < 0 || index > this.size){ //Check for Index Validity
            return console.log("Index out of range!")
        } 

        let newNode = new Node(data)
        let current = this.head
        let previous
        if (index === 0){ // if you want to add an element to the first position
            if(this.head === null){ // if the first position is empty
            this.head = newNode
            this.tail = newNode
            } else { // if the first position isn't empty
                newNode.next = this.head
                this.head.previous = newNode
                this.head = newNode
            }
        } else if(index === this.size){ // if you want to add an element to the last position
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        } else { // if you want to add elements to other positions
            for(let i= 0 ; i < index; i++){
                current = current.next
            }
            newNode.next = current
            newNode.previous = current.previous

            current.previous.next = newNode
            current.previous = newNode
        }

        this.size++
    }
}

