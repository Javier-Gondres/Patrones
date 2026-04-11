package state;

class EstadoPlay implements Estado {
    public void presionarPlay(Reproductor r) {
        System.out.println("Pausando...");
        r.setEstado(new EstadoPause());
    }
}
