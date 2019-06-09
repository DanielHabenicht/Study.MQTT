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
  public topics: string[] = ['test'];

  constructor(private mqttService: MqttService) {}

  addTopic(topic: string) {
    if (!topic || this.topics.includes(topic)) {
      return;
    }
    this.topics.push(topic);
  }

  removeTopic(topic: string) {
    this.topics = this.topics.filter(t => t != topic);
  }

  public unsafePublish(topic: string, message: string = ''): void {
    if (!topic || !message) {
      return;
    }
    this.mqttService.unsafePublish(topic, message, { qos: 1 });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

export interface Message {
  message: string;
}
