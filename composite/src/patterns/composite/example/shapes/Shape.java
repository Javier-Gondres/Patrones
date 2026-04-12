package org.composite.src.patterns.composite.example.shapes;

import java.awt.Graphics;

public interface Shape {
    int getX();
    int getY();
    int getWidth();
    int getHeight();
    void move(int dx, int dy);
    boolean isInsideBounds(int x, int y);
    void select();
    void unSelect();
    boolean isSelected();
    void paint(Graphics graphics);
}
