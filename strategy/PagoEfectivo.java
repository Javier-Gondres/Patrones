package strategy;

class PagoEfectivo implements EstrategiaPago {
    public void pagar(int monto) {
        System.out.println("Pagando en efectivo: " + monto);
    }
}
