public class Demo {
    public static void main(String[] args) {
        Middleware middleware = Middleware.link(new UserExistsMiddleware());

        System.out.println("Trying login...");
        boolean success = middleware.check("user@test.com", "123");
        System.out.println("Login result: " + success);
    }
}