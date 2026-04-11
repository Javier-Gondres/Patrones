package observer;

import java.util.*;

class Clima implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private int temperatura;

    public void setTemperatura(int temperatura) {
        this.temperatura = temperatura;
        notificar();
    }

    public int getTemperatura() {
        return temperatura;
    }

    public void agregarObserver(Observer o) {
        observers.add(o);
    }

    public void eliminarObserver(Observer o) {
        observers.remove(o);
    }

    public void notificar() {
        for (Observer o : observers) {
            o.actualizar(this);
        }
    }
}