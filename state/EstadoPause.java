package state;

class EstadoPause implements Estado {
    public void presionarPlay(Reproductor r) {
        System.out.println("Reanudando...");
        r.setEstado(new EstadoPlay());
    }
}