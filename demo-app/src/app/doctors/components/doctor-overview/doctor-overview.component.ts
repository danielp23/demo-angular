import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Doctor } from '../../interfaces/doctor.interface';
import { DoctorService } from '../../services/doctor.service';


@Component({
  selector: 'app-doctor-overview',
  templateUrl: './doctor-overview.component.html',
  styleUrls: ['./doctor-overview.component.scss']
})
export class DoctorOverviewComponent implements OnInit {

  
  displayedColumns: string[] = ['name', 'lastName', 'phoneNumber', 'location'];
  dataSource: Doctor[] = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getDoctors();
  }
  
  private getDoctors(){
    from(this.doctorService.getDoctors())
      .pipe(
        catchError(error => {
          console.error(error);
          return null;
        })
      ).subscribe((response: Doctor[]) => {
        if(response) {
          this.dataSource = response;
        }
      })
  }

  createDoctor(){
    const tempDoctor:Doctor = {
      name:'test',
      lastName:'test',
      phoneNumber: '123123123',
      location: 'El Salvador'
    };

    from(this.doctorService.createDoctor(tempDoctor))
      .pipe(
        catchError(error => {
          console.error(error);
          return null;
        })
      ).subscribe((response: Doctor) => {
        if(response) {
          this.getDoctors();
        }
      })
  }

}
