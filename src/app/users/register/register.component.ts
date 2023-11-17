import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/links/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email:String="";
  password:String="";
  name:String="";
  phone:String="";
  apiurll:String="https://retoolapi.dev/uKh7EY/priya";
  users : any[] = [];

  constructor(private apiService : ApiService,private router:Router){

  }
  registerUser(){
    // console.log("inside func");
    if(this.email != "" && this.password != "" && this.name != "" && this.phone != ""){
      let user = {
        userName : this.name,
        pswd : this.password,
        email : this.email,
        mobile : this.phone
      }
     
      this.apiService.insertUser(user).subscribe(
        (data) => {
          console.log(data);
        }
      )
      this.apiService.getUsers().subscribe((data)=>{
        console.log(data);
      })
      this.redirecttologin();
    }
   
  }
  redirecttologin(){
    this.router.navigate(['/login']);
  }
}






  // getinput(){
  //   return String({
  //     "name":this.name,
  //     "email":this.email,
  //     "phone":this.phone,
  //     "password": this.password
      

  //   })
  // }

  // signup(){
  //   sessionStorage.setItem('email',String(this.email));
  //   sessionStorage.setItem('password',String(this.password));

  //   fetch(String(this.apiurll),{
  //     method:'POST',
  //     body:JSON.stringify(this.getinput),
  //     headers:{
  //       'Content-Type':'application/json'
  //       }

  //   }).then((responce)=>{
  //     if (responce.ok){
  //       alert('signup success')
  //       console.log("ok")
  //       console.log(responce.json())
  //     }else{
  //       throw new Error("error")
  //     }
  //   }).catch((error)=>{
  //     console.log(error)

  //   }
  //   )


    
    

  // }


