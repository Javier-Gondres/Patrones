package strategy;

class PagoPayPal implements EstrategiaPago {
    public void pagar(int monto) {
        System.out.println("Pagando con PayPal: " + monto);
    }
}
