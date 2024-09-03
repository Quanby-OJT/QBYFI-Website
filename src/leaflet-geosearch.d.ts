declare module 'leaflet-geosearch' {
    export class GeoSearchControl {
      constructor(options: any);
    }
  
    export class OpenStreetMapProvider {
      search(options: any): Promise<any>;
    }
  }
  