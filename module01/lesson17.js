// Data Structures: Doubly Linked Lists - Pt.2 

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

    // LESSON17 STARTS HERE ↓

    removeAt(index) {
        if (index < 0 || index >= this.size){
            return console.log("Index out of range.")
        } 

        let current = this.head

        if(index === 0){
            this.head = this.head.next

            if(this.head !== null){ 
                this.head.previous = null
            } else {
                this.tail = null
            }
        } else if(index === this.size - 1){
            this.tail = this.tail.previous
            this.tail.next = null
        } else {
            for(let i = 0; i < index; i++){
                current = current.next
            }

            current.previous.next = current.next
            current.next.previous = current.previous
        }

        this.size--
    }
    // exercise 1 - return data that corresponds to the user's input index
    getData(index, data){
        if(this.head === null){  // If the list is empty...
            console.log("The list is empty.") // ...make this new node the head of the list
        } else if(index < 0 || index >= this.size){
            console.log("Index out of range.")
        } else {
            let current = this.head // This variable is being created as a starter point (since head is the first nod on any list)
            for(let i = 0; i < index; i++){  // you need a loop to iterate, yes...
                current = current.next // but using lists you need to traverse the list by using next and previous. it is what it is...
            }

            console.log("Value at index", index, "=", current.data)
    }
}

    printFunction(){
        let current = this.head
        let result = []

        while(current !== null){
            result.push(current.data)
            current = current.next
        }

        console.log(result.join("  <=>  "))
    }
}




let list = new DoublyLinkedList() 
list.add("Element 0")
list.add("Element 1")
list.add("Element 2")
list.add("Element 3")
list.printFunction()
list.insertAt(6, 2)
list.getData(2)
list.printFunction()
list.removeAt(0)
list.printFunction()