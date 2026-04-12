public class Demo {
    public static void main(String[] args) {
        VideoConversionFacade converter = new VideoConversionFacade();
        String result = converter.convertVideo("funny-cats.mp4", "ogg");
        System.out.println(result);
    }
}