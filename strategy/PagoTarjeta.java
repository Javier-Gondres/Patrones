package strategy;

class PagoTarjeta implements EstrategiaPago {
    public void pagar(int monto) {
        System.out.println("Pagando con tarjeta: " + monto);
    }
}
