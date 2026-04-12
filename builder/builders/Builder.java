package org.builder.builders;

import org.builder.cars.CarType;
import org.builder.components.Engine;
import org.builder.components.GPSNavigator;
import org.builder.components.Transmission;
import org.builder.components.TripComputer;

/**
 * Builder interface defines all possible ways to configure a product.
 */
public interface Builder {
    void setCarType(CarType type);
    void setSeats(int seats);
    void setEngine(Engine engine);
    void setTransmission(Transmission transmission);
    void setTripComputer(TripComputer tripComputer);
    void setGPSNavigator(GPSNavigator gpsNavigator);
}
