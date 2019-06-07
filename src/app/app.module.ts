import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from './modules/custom-material/custom-material.module';

import { appReducers } from './store/reducers/app.reducers';
import { UserEffects } from './store/effects/user.effects';

import { environment } from '../environments/environment';

import { UserService } from './services/user.service';
import { AuthService } from './auth/auth.service';

import { LocalStorageHelper } from '@app/helpers/local-storage.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { Constants } from '@app/resources/constants';

import { AppComponent } from './app.component';
import { CallbackComponent } from './auth/callback/callback.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/notFound/notFound.component';

import { UsersComponent } from './containers/users/users/users.component';
import { UserComponent } from './containers/users/user/user.component';

import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { LoadingComponent } from './components/loading/loading.component';

import { HeaderTitleDirective } from './directives/header-title.directive';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    SettingsComponent,
    ProfileComponent,
    DashboardComponent,
    NotFoundComponent,
    UsersComponent,
    UserComponent,
    UserListComponent,
    UserDetailComponent,
    LoadingComponent,
    HeaderTitleDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CustomMaterialModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    UserService,
    LocalStorageHelper,
    AuthGuardService,
    Constants
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
