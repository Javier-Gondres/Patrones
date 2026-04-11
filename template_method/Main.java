package template_method;

public class Main {
    public static void main(String[] args) {
        Bebida bebida1 = new Cafe();
        bebida1.preparar();

        System.out.println("-----");

        Bebida bebida2 = new Te();
        bebida2.preparar();

    }
}
