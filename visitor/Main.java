package visitor;

public class Main {
    public static void main(String[] args) {
        Figura[] figuras = {new Circulo(), new Rectangulo()};
        Visitor areaVisitor = new AreaVisitor();
        
        for (Figura figura : figuras) {
            figura.accept(areaVisitor);
        }
    }
}
