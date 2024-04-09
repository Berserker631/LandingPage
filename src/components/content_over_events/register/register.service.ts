import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

constructor(private http: HttpClient) { }

  findMember(memberCode: string){
    return this.http.get<any>(`http://192.168.21.52:3600/api/employee/findMember/?code=${memberCode}`)
  }
}
