package template_method;

abstract class Bebida {
    public final void preparar() {
        hervirAgua();
        prepararIngrediente();
        servir();
        agregarExtras();
    }

    void hervirAgua() {
        System.out.println("Hirviendo agua");
    }

    abstract void prepararIngrediente();

    void servir() {
        System.out.println("Sirviendo en taza");
    }

    void agregarExtras() {}
}
