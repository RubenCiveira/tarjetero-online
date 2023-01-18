import {
  Auth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface UserData {
  email: string;
  displayName: string;
  photoURL?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: UserData|null = null;
  private authStatusSub = new BehaviorSubject(this.currentUser);

  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged((crd) => {
      console.log("CAMBIE", crd)
      const ud = crd ? { email: crd.email, displayName: crd.displayName, photoUrl: crd.photoURL } as UserData : null;
      this.authStatusSub.next( ud );
    });
  }

  login({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  userId(): Observable<UserData|null> {
    return this.authStatusSub;
  }
}
