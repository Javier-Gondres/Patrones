public class Demo {
    public static void main(String[] args) {
        RoundHole hole = new RoundHole(5);
        RoundPeg rpeg = new RoundPeg(5);
        System.out.println("Hoyo 5, Clavo Redondo 5: " + hole.fits(rpeg));

        SquarePeg smallSqPeg = new SquarePeg(2);
        SquarePeg largeSqPeg = new SquarePeg(20);

        SquarePegAdapter smallAdapter = new SquarePegAdapter(smallSqPeg);
        SquarePegAdapter largeAdapter = new SquarePegAdapter(largeSqPeg);

        System.out.println("Hoyo 5, Cuadrado 2 adaptado: " + hole.fits(smallAdapter));
        System.out.println("Hoyo 5, Cuadrado 20 adaptado: " + hole.fits(largeAdapter));
    }
}