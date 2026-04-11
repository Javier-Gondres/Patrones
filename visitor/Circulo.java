package visitor;

public class Circulo implements Figura {

    public void accept(Visitor visitor) {
        visitor.visit(this);
    }


}
