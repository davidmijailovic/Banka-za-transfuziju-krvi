import { ScheduleExsistingAppointmentComponent } from './modules/public/schedule-exsisting-appointment/schedule-exsisting-appointment.component';
import { CreateSurveyComponent } from './modules/public/create-survey/create-survey.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './modules/authentication/register-user/register-user.component';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SaveApiKeyComponent } from './save-api-key/save-api-key.component';
import { AdminDashboardComponent } from './modules/administrator/admin-dashboard/admin-dashboard.component';
import { SendNewsComponent } from './modules/administrator/send-news/send-news.component';
import { UserProfileViewComponent } from './modules/public/user-profile-view/user-profile-view.component';
import { DisplayAllCentersComponent } from './modules/public/display-all-centers/display-all-centers.component';
import { RegisterBloodBankComponent } from './modules/administrator/register-blood-bank/register-blood-bank.component';
import { RegisterMedicalWorkerComponent } from './modules/administrator/register-medical-worker/register-medical-worker.component';
import { DisplayAllUsersComponent } from './modules/administrator/display-all-users/display-all-users.component';
import { BloodBankViewComponent } from './modules/medical_worker/blood-bank-view/blood-bank-view.component';
import { LoginComponent } from './modules/authentication/login/login/login.component';
import { AddAppointmentSlotComponent } from './modules/medical_worker/blood-bank-view/add-appointment-slot/add-appointment-slot.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RegisterAdministratorComponent } from './modules/administrator/register-administrator/register-administrator.component';
import { ChangePasswordComponent } from './modules/administrator/admin-dashboard/change-password/change-password.component';
import { AdminComplaintsComponent } from './modules/administrator/admin-complaints/admin-complaints.component';


const routes: Routes = [
  {path: 'home', component: HomeComponentComponent},
  {path :'register', component: RegisterUserComponent},
  {path: 'login', component: LoginComponent},
  {path:'saveApi/:id', component: SaveApiKeyComponent},
  {path:'sendNews/:id', component: SendNewsComponent},
  {path: 'userProfile/:id', component: UserProfileViewComponent},
  {path:'adminDashboard/registerBloodBank', component: RegisterBloodBankComponent},
  {path:'adminDashboard/calendar/:id', component: CalendarComponent}, 
  {path:'adminDashboard/registerMedicalWorker', component: RegisterMedicalWorkerComponent},
  {path:'adminDashboard/registerAdministrator', component: RegisterAdministratorComponent},
  {path:'adminDashboard/complaints', component: AdminComplaintsComponent},
  
  {path:'addAppointmentSlot', component: AddAppointmentSlotComponent},
  {path: 'displayAllUsers', component: DisplayAllUsersComponent},
  {path: '', component: DisplayAllCentersComponent},
  {path: 'bloodBank/:id', component: BloodBankViewComponent},
  {path: 'changepassword', component: ChangePasswordComponent},
  
  {path :'survey', component: CreateSurveyComponent},
  {path :'getAll', component: ScheduleExsistingAppointmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
