package strategy;

public class Main {
    public static void main(String[] args) {
        Pago pago = new Pago();

        pago.setEstrategia(new PagoTarjeta());
        pago.ejecutarPago(100);

        pago.setEstrategia(new PagoPayPal());
        pago.ejecutarPago(200);

        pago.setEstrategia(new PagoEfectivo());
        pago.ejecutarPago(300);

    }
}
