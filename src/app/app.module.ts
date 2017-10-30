import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ShareModule } from './shared/shared.module';
const googleMapsCore = AgmCoreModule.forRoot({
  apiKey: 'AIzaSyDweY1KUFUQWfpU6MWmIU9SqGlKhvCxX5I',
});
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ShareModule,
    googleMapsCore,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
