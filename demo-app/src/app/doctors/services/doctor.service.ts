import { Injectable } from '@angular/core';
import { Doctor } from '../interfaces/doctor.interface';
import { ApiServiceService } from '../services/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private doctorsRoute = 'api/doctor/';

  constructor(private apiService: ApiServiceService) { }

  async getDoctors<Promise>(){
    return this.apiService.get<Doctor[]>(`${this.doctorsRoute}all`, {}).toPromise();
  }

  async createDoctor<Promise>(body: Doctor){
    return this.apiService.post<Doctor[]>(`${this.doctorsRoute}`, body, {}).toPromise();
  }
}
