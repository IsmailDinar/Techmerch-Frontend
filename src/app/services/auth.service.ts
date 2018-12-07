import { UserService } from './user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<firebase.User>;
  public userUid: string;
  constructor(private afAuth: AngularFireAuth,  private route: ActivatedRoute, private router: Router, private userService: UserService) {
  this.user = afAuth.authState;
   }
   loginWithGoogle() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(result => this.router.navigateByUrl(returnUrl));
  }
   loginWithFacebook() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(result => this.router.navigateByUrl(returnUrl));
  }
   loginWithTwitter() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then(result => this.router.navigateByUrl(returnUrl));
  }
   loginWithEmailAndPwd(email: string, password: string) {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(result => this.router.navigateByUrl(returnUrl));
  }
  logout() {
    this.afAuth.auth.signOut().then(result => this.router.navigateByUrl(''));
    this.userUid = '';
  }
  createUser(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(result => this.router.navigateByUrl(''));
  }
  getUser(): Observable<User> {
    return this.user.pipe(switchMap(user => {
      if (user) {this.userUid = user.uid; return this.userService.get(user.uid);  }
      return of(null);
    }));
  }
}
