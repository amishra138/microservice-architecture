import { LoginToken } from "../models/login-token";
import { User } from "../models/User";
import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from "@angular/core";
import { LoginResponse } from "../models/login";
import { JwtService } from "./jwt-service";

@Injectable({
  providedIn: "root"
})
export class StorageService {

  constructor(private localStorageService: LocalStorageService, private jwtservice: JwtService) { }

  setAuthToken(token: LoginResponse, remember: boolean) {
    this.localStorageService.set("token", token);
    this.setRememberMe(remember);
    if(token.RememerMeToken){
      this.setRememberMeToken(token.RememerMeToken);
    }
  }

  getAuthToken(): LoginResponse {
    return <LoginResponse>this.localStorageService.get("token");
  }

  private setRememberMeToken(token: string) {
    this.localStorageService.set("rememberMetoken", token);
  }

  getRememberMeToken(): string {
    return this.localStorageService.get("rememberMetoken");
  }

  getUser(): User {
    return <User>this.localStorageService.get("user");
  }

  setUser(user: User) {
    this.localStorageService.set('user', user);
  }

  private setRememberMe(rememberMe: boolean) {
    this.localStorageService.set('rememberMe', rememberMe);
  }

  getRememberMe(): boolean {
    return <boolean>this.localStorageService.get('rememberMe');
  }

  clear(){
    this.localStorageService.remove('rememberMe');
    this.localStorageService.remove('user');
    this.localStorageService.remove('token');
  }
}
