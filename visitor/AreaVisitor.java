package visitor;

class AreaVisitor implements Visitor {

    public void visit(Circulo c) {
        System.out.println("Calculando área del círculo ...");
    }

    public void visit(Rectangulo r) {
        System.out.println("Calculando área del rectángulo ...");
    }
}
