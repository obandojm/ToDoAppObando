import { DataBaseService } from 'src/app/Services/data-base.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuard implements CanActivate {

  constructor (private database: DataBaseService, private router: Router) { }

  canActivate(): boolean {
    if(!this.database.isLogin) {
      return false;
    }
    return true;
  }
  
  
}
