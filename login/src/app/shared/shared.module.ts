import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuToggleComponent } from './components/menu-toggle/menu-toggle.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';

@NgModule({
  declarations: [LogoutButtonComponent, MenuToggleComponent],
  imports: [IonicModule],
  exports: [CommonModule, ReactiveFormsModule, IonicModule, LogoutButtonComponent, MenuToggleComponent]
})
export class SharedModule {}
