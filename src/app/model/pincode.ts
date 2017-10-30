export class Pincode {
    latitude: number;
    longitude: number;
    location: string;
    pincode: number;
    constructor(object: any) {
        this.latitude = object[1];
        this.longitude = object[2];
        this.location = object[3];
        this.pincode = object[4];
    }
}
