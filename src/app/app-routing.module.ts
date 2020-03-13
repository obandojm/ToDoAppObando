import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsNotLoginGuard } from './Guards/is-not-login.guard';
import { IsLoginGuard } from './Guards/is-login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  {
    path: 'start',
    loadChildren: () => import('./Pages/start/start.module').then( m => m.StartPageModule),
    canActivate: [IsNotLoginGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [IsNotLoginGuard]
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule),
    canActivate: [IsLoginGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [IsNotLoginGuard]
  },
  {
    path: 'done',
    loadChildren: () => import('./pages/done/done.module').then( m => m.DonePageModule),
    canActivate: [IsLoginGuard]
  },
  {
    path: 'modaltodo',
    loadChildren: () => import('./pages/modaltodo/modaltodo.module').then( m => m.ModaltodoPageModule),
    canActivate: [IsLoginGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [IsLoginGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
