// core modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// component
import { WpHeadComponent } from './wp-head/wp-head.component';

@NgModule({
  declarations: [
    WpHeadComponent
  ],
  exports: [
    WpHeadComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class SharedModule { }
