import { Component, OnDestroy } from '@angular/core';
import { MqttService } from 'ngx-mqtt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  public topics: string[] = ['my/topic'];

  constructor(private mqttService: MqttService) {}

  addTopic(topic: string) {
    if (!this.topics.includes(topic)) {
      this.topics.push(topic);
    }
  }

  public unsafePublish(topic: string, message: string = ''): void {
    this.mqttService.unsafePublish(topic, message, { qos: 1, retain: false });
  }

  public ngOnDestroy() {}
}

export interface Message {
  topic: string;
  message: string;
}
