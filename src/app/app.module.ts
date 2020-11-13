import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {NbEvaIconsModule} from '@nebular/eva-icons';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule, NbFormFieldModule,
  NbIconModule, NbInputModule,
  NbSelectModule,
  NbLayoutModule,
  NbThemeModule, NbAlertModule,
} from '@nebular/theme';
import {LoginComponent} from "./login/login.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {SignupComponent} from "./signup/signup.component";
import {AlertComponent} from "./_alert/alert.component";
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserDetailsComponent } from './user-admin/user-details/user-details.component';
import { CourseComponent } from './course/course.component';
import { HorseComponent } from './horse/horse.component';
import { UserPlanningComponent } from './course/user-planning/user-planning.component';
import { DateTimeTostringPipe } from './share/pipe/date-time-tostring.pipe';
import { CourseManagementComponent } from './course/course-management/course-management.component';

import { httpInterceptorProviders } from './_auth/auth-interceptor.service';
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {AccountPageComponent} from "./account-page/account-page.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {SuperAdminComponent} from "./super-admin/super-admin.component";
import {AdminDetailsComponent} from "./super-admin/admin-details/admin-details.component";
import { UpdateCourseComponent } from './course/update-course/update-course.component';
import { StringToDatetimePipe } from './share/pipe/string-to-datetime.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignupComponent,
    HomeComponent,
    PageNotFoundComponent,
    ResetPasswordComponent,
    AlertComponent,
    UserAdminComponent,
    UserDetailsComponent,
    CourseComponent,
    HorseComponent,
    UserPlanningComponent,
    DateTimeTostringPipe,
    CourseManagementComponent,
    AccountPageComponent,
    SuperAdminComponent,
    AdminDetailsComponent,
    UpdateCourseComponent,
    StringToDatetimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({name: 'dark'}),
    NbLayoutModule,
    NbIconModule,
    NbEvaIconsModule,
    NbCardModule,
    NgbModule,
    NbButtonModule,
    NbSelectModule,
    NgbPaginationModule,
    NgbAlertModule,
    NbActionsModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NbInputModule,
    ReactiveFormsModule,
    NbFormFieldModule,
    NbAlertModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
