public class YouTubeCacheProxy implements ThirdPartyYouTubeLib {
    private ThirdPartyYouTubeLib service;
    private String cache;

    public YouTubeCacheProxy(ThirdPartyYouTubeLib service) { this.service = service; }

    @Override
    public String getVideoInfo(String id) {
        if (cache == null) {
            cache = service.getVideoInfo(id);
            System.out.println("Retrieved from YouTube.");
        } else {
            System.out.println("Retrieved from cache.");
        }
        return cache;
    }
}