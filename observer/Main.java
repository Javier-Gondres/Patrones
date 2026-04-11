package observer;

public class Main {
    public static void main(String[] args) {
        Clima clima = new Clima();
        Pantalla pantalla = new Pantalla();
        
        clima.agregarObserver(pantalla);

        // Cuanto cambia la temperatura, se notificará a la pantalla a través del método actualizar
        clima.setTemperatura(25);
    }
}
