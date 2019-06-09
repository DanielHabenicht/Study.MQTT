import { Component, Input, OnInit } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/app.component';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  public subscription: Subscription;

  public messages: Message[] = [];
  @Input()
  public topic;

  constructor(private mqttService: MqttService) {}

  public observeTopic() {
    this.subscription = this.mqttService.observe(this.topic).subscribe((message: IMqttMessage) => {
      this.messages.push({ message: message.payload.toString() });
    });
  }
  ngOnInit() {
    this.observeTopic();
  }

  public clear() {
    this.messages = [];
  }
}
