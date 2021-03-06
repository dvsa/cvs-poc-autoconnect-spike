import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { NavController } from 'ionic-angular';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authentication: AuthenticationService, private navCtrl: NavController) {}

  async canActivate(): Promise<boolean> {
    // const authed = await this.authentication.isAuthenticated();
    const authed = await this.authentication.getAuth.isAuthenticated();
    if (authed) {
      return true;
    } else {
      // this.navCtrl.navigateRoot('/login');
      this.navCtrl.setRoot('/login');
      return false;
    }
  }
}
