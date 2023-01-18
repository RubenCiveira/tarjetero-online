import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService, UserData } from 'src/app/core/service/login.service';

@Component({
  standalone: true,
  selector: 'login-button',
  imports: [CommonModule],
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {
  isLogged = false;
  userData: UserData|null = null;
  subscription?: Subscription;

  constructor(public auth: AuthService, private cdRef: ChangeDetectorRef) {  
  }

  ngOnDestroy(): void {
    if( this.subscription ) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription = this.auth.userId().subscribe( ud => {
      this.isLogged = ud != null;
      this.userData = ud;
      this.cdRef.detectChanges();
    })
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
}
