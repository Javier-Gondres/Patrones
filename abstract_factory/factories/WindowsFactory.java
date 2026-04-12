package org.abstract_factory.factories;

import org.abstract_factory.buttons.Button;
import org.abstract_factory.buttons.WindowsButton;
import org.abstract_factory.checkboxes.Checkbox;
import org.abstract_factory.checkboxes.WindowsCheckbox;

/**
 * Each concrete factory extends basic factory and responsible for creating
 * products of a single variety.
 */
public class WindowsFactory implements GUIFactory {

    @Override
    public Button createButton() {
        return new WindowsButton();
    }

    @Override
    public Checkbox createCheckbox() {
        return new WindowsCheckbox();
    }
}