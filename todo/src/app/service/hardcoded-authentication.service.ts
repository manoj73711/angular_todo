import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if(username === 'manoj' && password === 'manoj'){
      sessionStorage.setItem('authenticatedUser', username)
      return true;
   }
  return false;
  }

  isuserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
     return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }

}
