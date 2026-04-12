public class Demo {
    public static void main(String[] args) {
        YouTubeCacheProxy proxy = new YouTubeCacheProxy(id -> "Data of video " + id);
        proxy.getVideoInfo("v1");
        proxy.getVideoInfo("v1");
    }
}