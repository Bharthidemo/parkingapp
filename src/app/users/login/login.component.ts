import { Component } from '@angular/core';
import { ApiService } from 'src/app/links/api.service';
import { Router } from '@angular/router';
import { distanceAndSkiddingToXY } from '@popperjs/core/lib/modifiers/offset';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';
  users : any[] = [];

  constructor(private apiService : ApiService,private router: Router){

  }
  checkLogin() {
    console.log(this.users);
    this.message = "";
    if(this.email != "" && this.password != ""){
      this.apiService.getUser(this.email).subscribe(
        (data : any) => {
          this.users = data;
          console.log(data);

          for(let user of this.users){
            if(user.userName == this.email && user.pswd == this.password){
              this.message = "name and Password Matched...";
              // this.redirecttohome();
              break;
            }
          }
          if(this.message == ""){
            this.message = "Invalid Email or password";
          }
          
    this.resetForm();
        }
      );
      
    }else{
      this.message = "Values Kodu thala...";
    }
  }

  
resetForm(){
    this.email = "";
    this.password = "";
}
redirecttohome(){
  this.router.navigate(['/profile']);
}


}

