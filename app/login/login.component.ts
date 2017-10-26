import { Component, OnInit } from '@angular/core';
import { User } from "./auth";

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'login.template.html'
})

export class LoginComponent implements OnInit {

    user = {} as User;

    constructor(
        private afAuth: AngularFireAuth,
        private angFire: AngularFireDatabase,
        private router: Router,
    ) { 
        
    }   
    async login(user: User) {
        try {
            const result = this.afAuth.auth.signInWithEmailAndPassword(user.id, user.password);
            console.log('login', result);
            if (result) {
                this.router.navigateByUrl('/main');
            }
        }
    
        catch (e) {
            console.error(e);
        }
    }
    ngOnInit() {      
    this.afAuth.authState.subscribe(auth => {
        console.log(auth.uid); 
      if (!auth)  
        this.router.navigateByUrl('/');
      else
        this.router.navigateByUrl('/main');
    });
    }
}