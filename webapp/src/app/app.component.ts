import { Component, OnDestroy } from '@angular/core';
import { MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private subscription: Subscription;
  public topics: string[] = ['my/topic'];

  constructor(private mqttService: MqttService) {}

  addTopic(topic: string) {
    this.topics.push(topic);
  }

  public unsafePublish(topic: string = 'my/topic', message: string = ''): void {
    this.mqttService.unsafePublish(topic, message, { qos: 1 });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

export interface Message {
  topic: string;
  message: string;
}
