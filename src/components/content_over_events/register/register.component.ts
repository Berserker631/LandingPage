import { Component, OnInit } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Employee } from '../../../interfaces/Employee';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [RouterModule, FormsModule, HttpClientModule]
})
export class RegisterComponent {
  employeeCode: string = '';
  employeeName: string = ''
  employeeArea: string = ''
  memberInformation: Employee = {
    name: '',
    area: ''
  };
  // submitted: boolean = false;
  constructor(private router: Router, private registerService: RegisterService ){}

  validateCode(){
    let member = this.registerService.findMember(this.employeeCode).subscribe({
      next: (res) => {
        this.memberInformation = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
    return member;
  }

  onSubmit(){
    this.validateCode();
    if (this.memberInformation.area != '' && this.memberInformation.name != '') {
      this.employeeName = this.memberInformation.name;
      this.employeeArea = this.memberInformation.area;
      setTimeout(() => {
        this.router.navigate(['/participants']);
      }, 3000);
    }
  }

  navigateTo(){
  }
}
