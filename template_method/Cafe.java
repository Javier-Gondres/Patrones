package template_method;

class Cafe extends Bebida {

    void prepararIngrediente() {
        System.out.println("Colando café");
    }

    void agregarExtras() {
        System.out.println("Agregando azúcar");
    }
}
