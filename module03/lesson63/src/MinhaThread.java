public class MinhaThread extends Thread {
    @Override
    public void run() {
       for(int i = 0; i < 5; i++) {
           System.out.println(Thread.currentThread().getName() + "executando: " + i);
       }
    }

    public static void main(String[] args) {
        MinhaThread t1 = new MinhaThread();
        MinhaThread t2 = new MinhaThread();

        t1.start();
        t2.start();
    
        System.out.println("Thread principal (main) iniciada.");

        Thread thread1 = new Thread(() -> {
            for (int i = 0; i < 5; i ++) {
                System.out.println(Thread.currentThread().getName() + "executando: " + i);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    System.out.println("Thread 1 interrompida");
                }
            }
        });

        Thread thread2 = new Thread(() -> {
            for (int i = 0; i < 5; i ++) {
                System.out.println(Thread.currentThread().getName() + "executando: " + i);
                try {
                    Thread.sleep(700);
                } catch (InterruptedException e) {
                    System.out.println("Thread 2 interrompida");
                }
            }
        });

        thread1.start();
        thread2.start();

        for (int i = 1; i <= 5; i++) {
            System.out.println("Thread principal (main) executando " + i);
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {
                System.out.println("Thread principal interrompida.");
            }
        }

        System.out.println("Thread principal (main) finalizada.");
    }
}
