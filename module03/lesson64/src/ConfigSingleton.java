    //Crie um classe chamada ConfigSingleton que implemente o padrão de projeto Singleton

    // Adicione um atributo versao (String) que inicialize com o valor "1.0"
    // Crie um metodo getInstancia que retorna a unica instancia da classe
    // Torne o construtor da classe privado

    // Na classe main, obtenha duas instancia de ConfigSingleton e verifique se ambas referenciam o mesmo objeto

    public class ConfigSingleton {
        private static ConfigSingleton instancia;
        // Criação de um atributo estático para armazenar a única instância da classe.
        // A palavra 'static' garante que o atributo pertence à classe, e nao a objetos individuais

        private String versao = "1.0"; // Um atributo chamado "versão" que representa a versão da configuração
        // Por padrão, é iniciado com valor 1.0
        // 'Private' para estar de acordo com o encapsulamento (só pode ser acessado pela classe ou metodos publicos)

        private ConfigSingleton() {
            // C0nstrutor privado: impede que outros objetos criem instancias dessa classe diretamente
            // Isso é importante para garantir uqe só existe uma unica instancia (padrao Singleton)
        }

        public static ConfigSingleton getInstancia() {
           // Metodo publico e estatico que retorna a unica instancia da classe

           if (instancia == null) {
               // verifica se a instancia ainda nao foi criada
               // isso só sera verdade na primeira vez que o metodo for chamado
                instancia = new ConfigSingleton();
                // Cria a unica instancia de classe e armazena no atributo estatido
           }
           return instancia;
        }

        public String getVersao() {// metodo publico para acessar o valor do atributo 'versao' - um getter
            return versao;
        }
    }

    class Main { // classe principal, para testar o funcionamento do Singleton
        public static void main(String[] args) {
            // metodo principal: onde o programa começa a ser executado

            ConfigSingleton instancia1 = ConfigSingleton.getInstancia(); // Chama o getter e obtem a instancia unica da classe Singleton

            ConfigSingleton instancia2 = ConfigSingleton.getInstancia(); // Obtem novamente a mesma instancia unica da classe Singleton;

            System.out.println("Instância 1: " + instancia1);
            System.out.println("Instância 2: " + instancia2);
            System.out.println("Ambas são iguais? " + (instancia1 == instancia2));
            System.out.println("Versão: " + instancia1.getVersao());
        }
    }
