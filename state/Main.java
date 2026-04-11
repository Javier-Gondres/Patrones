package state;

public class Main {
    public static void main(String[] args) {
        Reproductor reproductor = new Reproductor();

        reproductor.presionarPlay(); // Reproduciendo...    Stop -> Play
        reproductor.presionarPlay(); // Pausando...         Play -> Pause
        reproductor.presionarPlay(); // Reanudando...       Pause -> Play
    }
}
