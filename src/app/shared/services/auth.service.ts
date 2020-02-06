// Vendors
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

// Models
import { AuthModel } from 'src/app/shared/models';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        public afAuth: AngularFireAuth
        ) {}

    public doRegist(value: AuthModel) {
        return new Promise<any>((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
            .then(res => {
                resolve(res);
            }, err => reject(err))
        })
    }

    public doLogin(value: AuthModel) {
        return new Promise<any>((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(value.email, value.password)
            .then(res => {
                resolve(res);
            }, err => reject(err))
        })
    }
}