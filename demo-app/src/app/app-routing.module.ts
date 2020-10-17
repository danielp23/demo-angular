import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorDetailsComponent } from './doctors/components/doctor-details/doctor-details.component';
import { DoctorOverviewComponent } from './doctors/components/doctor-overview/doctor-overview.component';

const routes: Routes = [
  { path: 'doctor-details', component: DoctorDetailsComponent },
  { path: 'doctor-overview', component: DoctorOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
