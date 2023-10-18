
interface CurrentCoordinates {
    latitude: number
    longitude: number
  }

  interface GeolocationError {
    code: number;
    message: string
  }

  export type {
    CurrentCoordinates,
    GeolocationError
  }