import { DataBaseService } from 'src/app/Services/data-base.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsNotLoginGuard implements CanActivate {
  
  constructor(private database: DataBaseService) { }

  canActivate(): boolean {
    return !this.database.isLogin;
  }
  
}
