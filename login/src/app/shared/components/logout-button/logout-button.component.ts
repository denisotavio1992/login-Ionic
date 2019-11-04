import { Component, Input, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

import { AuthService } from 'src/app/core/services/auth.service';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-logout-button',
  template: `
    <ion-buttons>
      <ion-button (click)="logout()">
        <ion-icon name="exit" slot="icon-only"></ion-icon>
      </ion-button>
    </ion-buttons>
  `
})
export class LogoutButtonComponent implements OnInit {
  @Input() menu: string;

  constructor(
    private authService: AuthService,
    private menuCtrl: MenuController,
    private navCtrl: NavController,
    private overlayService: OverlayService
  ) {}

  async ngOnInit() {

  }

  async logout(): Promise<void> {
    await this.overlayService.alert({
      message: 'Do you really want to quit?',
      buttons: [
        {
          text: 'Sim',
          handler: async () => {
            await this.authService.logout();
            await this.menuCtrl.enable(false, this.menu);
            this.navCtrl.navigateRoot('/login');
          }
        },
        'Não'
      ]
    });
  }
}
