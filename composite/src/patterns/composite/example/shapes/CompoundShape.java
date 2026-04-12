package org.composite.src.patterns.composite.example.shapes;

import java.awt.Color;
import java.awt.Graphics;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CompoundShape extends BaseShape {
    protected final List<Shape> children = new ArrayList<>();

    public CompoundShape(Shape... components) {
        super(0, 0, Color.BLACK);
        add(components);
    }

    public void add(Shape component) {
        children.add(component);
    }

    public void add(Shape... components) {
        children.addAll(Arrays.asList(components));
    }

    public void remove(Shape component) {
        children.remove(component);
    }

    public void remove(Shape... components) {
        children.removeAll(Arrays.asList(components));
    }

    public void clear() {
        children.clear();
    }

    @Override
    public int getX() {
        if (children.isEmpty()) return 0;
        int min = children.get(0).getX();
        for (Shape child : children) {
            if (child.getX() < min) min = child.getX();
        }
        return min;
    }

    @Override
    public int getY() {
        if (children.isEmpty()) return 0;
        int min = children.get(0).getY();
        for (Shape child : children) {
            if (child.getY() < min) min = child.getY();
        }
        return min;
    }

    @Override
    public int getWidth() {
        int maxWidth = 0;
        int originX = getX();
        for (Shape child : children) {
            int relativeX = child.getX() - originX;
            int childWidth = relativeX + child.getWidth();
            if (childWidth > maxWidth) maxWidth = childWidth;
        }
        return maxWidth;
    }

    @Override
    public int getHeight() {
        int maxHeight = 0;
        int originY = getY();
        for (Shape child : children) {
            int relativeY = child.getY() - originY;
            int childHeight = relativeY + child.getHeight();
            if (childHeight > maxHeight) maxHeight = childHeight;
        }
        return maxHeight;
    }

    @Override
    public void move(int dx, int dy) {
        for (Shape child : children) {
            child.move(dx, dy);
        }
    }

    @Override
    public boolean isInsideBounds(int x, int y) {
        for (Shape child : children) {
            if (child.isInsideBounds(x, y)) return true;
        }
        return false;
    }

    @Override
    public void unSelect() {
        super.unSelect();
        for (Shape child : children) {
            child.unSelect();
        }
    }

    public boolean selectChildAt(int x, int y) {
        for (Shape child : children) {
            if (child.isInsideBounds(x, y)) {
                child.select();
                return true;
            }
        }
        return false;
    }

    @Override
    public void paint(Graphics graphics) {
        if (isSelected()) {
            enableSelectionStyle(graphics);
            graphics.drawRect(getX() - 1, getY() - 1, getWidth() + 1, getHeight() + 1);
            disableSelectionStyle(graphics);
        }
        for (Shape child : children) {
            child.paint(graphics);
        }
    }
}
