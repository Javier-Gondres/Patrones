package strategy;

class Pago {
    private EstrategiaPago estrategia;

    public void setEstrategia(EstrategiaPago estrategia) {
        this.estrategia = estrategia;
    }

    public void ejecutarPago(int monto) {
        estrategia.pagar(monto);
    }
}
