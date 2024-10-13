// Introduction to Data Structure: LISTS

// Creating a class that represents a node:
class Node {
    constructor(data){
        this.data = data // Store the data
        this.next = null // Initialize the next node as null
    }
}

class LinkedList {
    constructor(){
        this.head = null // Start with an empty list
        this.size = 0 // The list initially has no elements
    }

    add (data){
        let newNode = new Node(data) // Create a new node with the given data
        if(this.head === null){  // If the list is empty...
            this.head = newNode // ...make this new node the head of the list
        } else { 
            let current = this.head  // Start at the head of the list
            while(current.next != null){ // Traverse the list to find the last node
                current = current.next 
            }

            current.next = newNode // Link the last node to the new node
        }

        this.size++  // Declare the size of the list has increased
    }

    insertAt(data, index){
        if(index < 0 || index > this.size){ //Check for Index Validity
            return console.log("Index out of range!")
        } 

        let newNode = new Node(data) //  Creates a new node with the given data to be inserted into the list.
        let current = this.head // current: Starts at the head of the list and will be used to traverse the list.
        let previous // Will be used to keep track of the node just before the one we are inserting.

        if (index === 0){ // If the new node should be inserted at the very beginning of the list,
            newNode.next = this.head //  The new node’s next pointer is set to the current head of the list (the node that will now come after the new node).
            this.head = newNode // Updates the head of the list to be the new node.
        } else { // Other case: To handle an insertion at positions other than the start.
            for(let i = 0; i < index; i++){ // Loops through the list to find the correct position
                previous = current // Updates previous to be the current node.
                current = current.next // Moves current to the next node in the list.
            }

            newNode.next = current // Sets the new node’s next pointer to the current node (the node that will come after the new node).
            previous.next = newNode // Updates the previous node’s next pointer to the new node (the new node will now follow the previous node).
        }

        this.size++

    }

    removeFrom(index){
        if(index < 0 || index > this.size){
            return console.log("Index out of range!")
        }

        let current = this.head
        let previous
        if (index === 0){
            this.head = current.next
        } else {
            for(let i = 0; i < index; i++){
                previous = current
                current = current.next
            }

            previous.next = current.next
        }

        this.size--
        return current.data
    }

    indexOf(data) {
        let current = this.head
        let index = 0

        while(current !== null){
            if(current.data === data){
                return index
            }
            index++
            current = current.next
        }

        return -1
    }

    isEmpty(){
        return this.size === 0
    }

    sizeOfList() {
        return this.size
    }

    printList(){ // How can we print a list?
        let current = this.head
        while(current !== null){
            console.log(current.data)
            current = current.next
        }
    }

}

let list = new LinkedList()
list.add("Element 0")
list.add("Element 1")
list.add("Element 2")
list.add("Element 3")
console.log(list.indexOf("Element 3"))
list.removeFrom(1)
console.log(list.isEmpty())

// I found this concept of lists something very difficult to grasp. Let's keep practicing: I can't wait for this to be something easy to me.