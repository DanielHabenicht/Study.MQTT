import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubscriptionComponent } from './subscription.component';
import { MaterialModule } from '../material-module/material-module.module';

@NgModule({
  declarations: [SubscriptionComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SubscriptionComponent]
})
export class SubscriptionModule {}
