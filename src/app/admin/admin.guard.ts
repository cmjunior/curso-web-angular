import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {
  constructor(
    private auth: Auth,
    private router: Router
  ) {

  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return authState(this.auth).pipe(
      map( (user: any) => {
        if ( ! user ) {
          this.router.navigateByUrl('login/admin')
          return false;
        }

        return true
      })
    )
  }
  
}
