import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Dependency Injection
  constructor(private http : HttpClient) { }

  private userUrl = 'https://retoolapi.dev/pQclyz/pathEUsers';
  private productUrl = '';

  getUsers(){
    return this.http.get(this.userUrl);
  }

  getUser(userName: string){
    return this.http.get(this.userUrl+ "?userName=" + userName);
  }

  insertUser(user : any){
    console.log("inside api service");
    return this.http.post(this.userUrl, user);
  }

  getProduct(){
    return this.http.get(this.productUrl);
  }
  // deleteuser(email:any){
  //   return this.http.delete(this.userUrl+'?username='+email)
  // }

}
