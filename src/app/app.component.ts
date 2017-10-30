import { Pincode } from './model/pincode';
import { Component, ViewChild, ElementRef } from '@angular/core';

declare var google;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'app';
  mapLatitude: number;
  mapLongitude: number;
  search: string;

  constructor() {
    this.pincodeData = new Array();
    this.mapLatitude = 0.0;
    this.mapLongitude = 0.0;
    this.search = '';
  }
  pincodeData: Pincode[];
  extractData(data) { // Input csv data to the function
    const csvData = data;
    const allTextLines = csvData.split(/\r\n|\n/);
    const headers = allTextLines[0].split(',');
    const lines = [];

    for (let i = 0; i < allTextLines.length; i++) {
      // split content based on comma
      if (i === 0) {
        continue;
      }
      const locationInfo = allTextLines[i].split(',');
      if (locationInfo.length === headers.length) {
        this.pincodeData.push(new Pincode(locationInfo));
        console.log('object' + locationInfo + 'added' + 'to' + this.pincodeData);
      }
    }
    console.log(lines);
    // The data in the form of 2 dimensional array.
  }
  public handleFileSelect(evt: any) {
    const files = evt.target.files; // FileList object
    const file = files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    const self = this;
    reader.onload = function (event: any) {
      const csv = event.target.result; // Content of CSV file
      self.extractData(csv); // Here you can call the above function.
    };
  }

  public changeMarker(marker: Pincode) {
    this.mapLatitude = parseFloat('' + marker.latitude);
    this.mapLongitude = parseFloat('' + marker.longitude);
  }

}
