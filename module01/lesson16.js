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
        if (index === 0){
            newNode.next = this.head
            this.head = newNode
        } else {
            for(let i = 0; i < index; i++){
                previous = current
                current = current.next
            }

            newNode.next = current
            previous.next = newNode
        }

        this.size++
    }
}