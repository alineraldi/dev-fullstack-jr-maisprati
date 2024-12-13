import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");

        Collections.sort(list);
        list.forEach(System.out::println);

        System.out.println("------------------------------------------------------");

        LinkedList<String> linkedList = new LinkedList<>();
        linkedList.add("João");
        linkedList.add("Manoela");
        linkedList.addFirst("Marcio");
        linkedList.addLast("Hyago");

        System.out.println("Primeiro elemento: " + linkedList.getFirst());

        linkedList.forEach(System.out::println);

        System.out.println("------------------------------------------------------------------");

        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();

        priorityQueue.add(30);
        priorityQueue.add(10);
        priorityQueue.add(1);
        System.out.println("PriorityQueue: " + priorityQueue);
        System.out.println("PriorityQueue (Head): " + priorityQueue.peek());

        while(!priorityQueue.isEmpty()) {
            System.out.println("Removendo: " + priorityQueue.poll());
        }


        Queue<String> linkedListQueue = new LinkedList<>();

        linkedListQueue.add("Elemento 1");
        linkedListQueue.add("Elemento 45");
        System.out.println("LinkedList Queue: " + linkedListQueue);
        System.out.println("LinkedList Queue (Head): " + linkedListQueue.peek());


        System.out.println("---------------------------------------------");

        HashMap<String, Integer> hashMap = new HashMap<>();

        hashMap.put("Laranja", 3);
        hashMap.put("Beterraba", 5);
        hashMap.put("Maçã", 2);

        System.out.println("Valores associados a laranja: " + hashMap.get("Laranja"));

        hashMap.forEach((key, value) -> System.out.println(key + " -> "));

       //

        List<Integer> nums = List.of(1, 2, 3, 4, 5);

        List<Integer> par = nums.stream().filter(num -> num % 2 == 0).collect(Collectors.toList());

        System.out.println("Números pares: " + par);

        List<String> palavras = List.of("Java", "Stream", "Aula");

        List<String> palavrasMaiusculas = palavras.stream().map(String::toUpperCase).collect(Collectors.toList());

        System.out.println("Palavras em maiúsculas: " + palavrasMaiusculas);

    }
}