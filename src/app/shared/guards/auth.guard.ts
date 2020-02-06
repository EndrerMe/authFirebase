// Vendors
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// Environments
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
    ) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const loginData = JSON.parse(localStorage.getItem('user'));
        const user = loginData ? loginData.user : undefined;
        if (user && user.apiKey === environment.firebaseConfig.apiKey) {
            return true
        }
        this.router.navigate(['/auth/login'])
        return false
    }
}