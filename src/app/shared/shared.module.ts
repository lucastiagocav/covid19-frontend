import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [ContainerComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [ContainerComponent, FooterComponent, HeaderComponent]
})
export class SharedModule { }
