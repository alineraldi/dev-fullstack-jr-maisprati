public class Tubarao implements Animal {

    @Override
    public void emitirSom() {
        System.out.println("Baby shark");
    }

    public void emitirSom(String som) { // é possível repetir um metodo quando a assinatura é diferente - vira um metodo novo
        
    }

    @Override
    public void dormir() {
        Animal.super.dormir();
    }

    public static void main(String[] args) {
        Animal tubarao = new Tubarao();
        tubarao.emitirSom();
    }
}
