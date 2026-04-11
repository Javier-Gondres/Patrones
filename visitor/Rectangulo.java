package visitor;

public class Rectangulo implements Figura {
    
    public void accept(Visitor visitor) {
        visitor.visit(this);
    }
}
