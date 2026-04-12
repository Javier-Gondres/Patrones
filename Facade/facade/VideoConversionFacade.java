public class VideoConversionFacade {
    public String convertVideo(String fileName, String format) {
        System.out.println("Facade: conversion started.");
        VideoFile file = new VideoFile(fileName);

        return "File converted to " + format;
    }
}