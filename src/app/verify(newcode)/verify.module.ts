import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyPageRoutingModule } from './verify-routing.module';

import { VerifyPage } from './verify.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyPageRoutingModule,
    HttpClientModule
  ],
  declarations: [VerifyPage]
})
export class VerifyPageModule {}
