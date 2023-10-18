// hooks/useLocation.ts
import Geolocation, { GeoPosition, GeoError } from "react-native-geolocation-service";
import { CurrentCoordinates } from "../useLocation/types";

export function useLocation(): {
  getCurrentLocation: () => Promise<CurrentCoordinates>;
  watchLocation: (callback: (location: CurrentCoordinates) => void) => number;
  clearWatch: (watchId: number) => void;
} {
  const getCurrentLocation = (): Promise<CurrentCoordinates> =>
    new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        (position: GeoPosition) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error: GeoError) => {
          reject(error);
        },
        { enableHighAccuracy: true } // Removed 'maximumAge'
      );
    });

  const watchLocation = (callback: (location: CurrentCoordinates) => void): number => {
    const watchId = Geolocation.watchPosition(
      (position: GeoPosition) => {
        const { latitude, longitude } = position.coords;
        callback({ latitude, longitude });
      },
      (error: GeoError) => {
        console.error("Error watching location:", error);
      },
      { enableHighAccuracy: true } // Removed 'maximumAge'
    );
    return watchId;
  };

  const clearWatch = (watchId: number): void => {
    Geolocation.clearWatch(watchId);
  };

  return { getCurrentLocation, watchLocation, clearWatch };
}
