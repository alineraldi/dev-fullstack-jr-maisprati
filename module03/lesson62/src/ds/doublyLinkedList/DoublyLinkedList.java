package ds.doublyLinkedList;

public class DoublyLinkedList<T> {
    Node<T> head;
    Node<T> tail;
    int size;

    public DoublyLinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    public void addLast(T value) {
        Node<T> newNode = new Node<>(value);
        if(size == 0) {
            head = tail = newNode;
        } else {
            tail.next = newNode;
            newNode.previous = tail;
            tail = newNode;
        }
        size++;
    }

    public void addFirst(T value) {
        Node<T> newNode = new Node<>(value);
        if(size == 0) {
            head = tail = newNode;
        } else {
            newNode.next = head;
            head.previous = newNode;
            head = newNode;
        }
        size++;
    }

    public T removeFirst() { // é 'public T' pois T é o tipo de retorno
        if(size == 0) throw new IllegalStateException("Empty list");
        T value = head.value; // o que será retornado: o valor armazenado no primeiro nó da lista
        if(size == 1){
            head = tail = null;
        }
        else {
            head = head.next;
            head.previous = null;
        }
        size--;
        return value; // O valor deixa de ser referenciado, mas é retornado: Ao retornar esse valor, você ainda pode usá-lo em outras partes do código.
    }

    public T removeLast() {
        if (size == 0) throw new IllegalStateException("Empty list.");
        T value = tail.value;
        if (size == 1) {
            head = tail = null;
        }
        else {
            tail = tail.previous;
            tail.next = null;
        }
        size --;
        return value;
    }

    public void display() { // Meu jeito
        System.out.print("[");
        for (Node<T> current = head; current != null; current = current.next) {
            System.out.print(current.value + " ");
        }
        System.out.println("]");
    }

    public void displayProf() { // Jeito exibido na aula
        Node<T> current = head;
        System.out.println("Lista: ");
        while(current != null) {
            System.out.println(current.value);
            current = current.next;
        }

        System.out.println("]");
    }




}
