import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'localhost',
  port: 15670,
  path: '/ws'
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule, MqttModule.forRoot(MQTT_SERVICE_OPTIONS)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
