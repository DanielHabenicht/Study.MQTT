import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubscriptionComponent } from './subscription.component';

@NgModule({
  declarations: [SubscriptionComponent],
  imports: [CommonModule],
  exports: [SubscriptionComponent]
})
export class SubscriptionModule {}
