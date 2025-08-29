import { NgToastModule } from 'ng-angular-popup';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCardHeader,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonInput,
  IonInputPasswordToggle,
  IonButton,
  IonButtons,
  ToastController,
} from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonButton,
    IonInput,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCard,
    IonCardHeader,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonInputPasswordToggle,
    IonButton,
    RouterModule,
  ],
})
export class LoginPage implements OnInit {
  mail: string = 'test@test.com';
  password: string = '123';
  mailSelected!: string;
  passwordSelected!: string;

  constructor(private router: Router, private toastCtrl: ToastController) {}

  ngOnInit() {}

  login() {
    if (this.mailSelected == this.mail && this.passwordSelected == this.password)
    {
      this.router.navigate(['/home']);
      this.showToast('Bienvenido 👋', 'success');
    }
    else
    {
       this.showToast('Credenciales inválidas ❌', 'danger');
    }
  }

  private async showToast(message: string, color: string = 'primary') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom',
      color,
    });
    await toast.present();
  }
}
