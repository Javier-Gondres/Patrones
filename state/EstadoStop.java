package state;

class EstadoStop implements Estado {
    public void presionarPlay(Reproductor r) {
        System.out.println("Reproduciendo...");
        r.setEstado(new EstadoPlay());
    }
}
