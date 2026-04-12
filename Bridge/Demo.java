public class Demo {
    public static void main(String[] args) {
        testDevice(new Tv());
    }
    public static void testDevice(Device device) {
        System.out.println("Tests with basic remote.");
        Remote basicRemote = new Remote(device);
        basicRemote.togglePower();
        basicRemote.volumeUp();
        System.out.println("Device status: " + device.isEnabled() + " Vol: " + device.getVolume());
    }
}