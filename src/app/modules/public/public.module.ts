import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PublicComponent } from './components/public/public.component';
import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  declarations: [PublicComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class PublicModule { }
