package ds.stack;

public class Stack<T> {
    Node<T> top;
    int size;

    public Stack() {
        this.top = null;
        this.size = 0;
    }

    public void push(T value) {
        Node<T> newNode = new Node(value);
        newNode.next = top;
        top = newNode;
    }

    public T pop() {
        if(size == 0) {
            throw new IllegalStateException("Empty stack!");
        }

        T value = top.value;
        top = top.next;
        size --;
        return value;
    }
}
