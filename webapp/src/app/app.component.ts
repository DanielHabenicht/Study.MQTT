import { Component, OnDestroy } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private subscription: Subscription;
  public message: string;

  constructor(private mqttService: MqttService) {
    this.subscription = this.mqttService.observe('my/topic').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
    });
  }

  public unsafePublish(topic: string = 'my/topic', message: string = 'Cool'): void {
    this.mqttService.unsafePublish(topic, message, { qos: 1, retain: true });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
