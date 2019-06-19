import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallbackComponent } from './auth/callback/callback.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/notFound/notFound.component';

import { UsersComponent } from './containers/users/users/users.component';
import { UserComponent } from './containers/users/user/user.component';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'callback', component: CallbackComponent },
  {path: 'dashboard', component: DashboardComponent,  canActivate: [AuthGuard] },
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  { path: 'user/:id', component: UserComponent, canActivate: [AuthGuard] },
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
  {path: 'configurations',
    loadChildren: () => import('./modules/configurations/configurations.module')
      .then(mod => mod.ConfigurationsModule)
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
