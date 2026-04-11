package observer;

class Pantalla implements Observer {
    public void actualizar(Clima clima) {
        System.out.println("Temperatura actual: " + clima.getTemperatura());
    }
}
