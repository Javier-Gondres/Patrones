package org.abstract_factory;

import org.abstract_factory.app.Application;
import org.abstract_factory.factories.GUIFactory;
import org.abstract_factory.factories.MacOSFactory;
import org.abstract_factory.factories.WindowsFactory;

/**
 * Demo class. Everything comes together here.
 */
public class DemoAbstractFactory {

    /**
     * Application picks the factory type and creates it in run time (usually at
     * initialization stage), depending on the configuration or environment
     * variables.
     */
    private static Application configureApplication() {
        Application app;
        GUIFactory factory;
        String osName = System.getProperty("os.name").toLowerCase();
        if (osName.contains("mac")) {
            factory = new MacOSFactory();
        } else {
            factory = new WindowsFactory();
        }
        app = new Application(factory);
        return app;
    }

    public static void main(String[] args) {
        Application app = configureApplication();
        app.paint();
    }
}
