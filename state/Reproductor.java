package state;

class Reproductor {
    private Estado estado;

    public Reproductor() {
        estado = new EstadoStop();
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }

    public void presionarPlay() {
        estado.presionarPlay(this);
    }
}
