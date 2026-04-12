public class UserExistsMiddleware extends Middleware {
    @Override
    public boolean check(String email, String password) {
        if (!email.equals("admin@example.com")) {
            System.out.println("Email not registered!");
            return false;
        }
        return checkNext(email, password);
    }
}