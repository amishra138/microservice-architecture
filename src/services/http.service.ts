import { StorageService } from "./storage.service";
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from "@angular/core";



export function handleError(reason: any, reject){
  if (reason._body == "") {
    reject(reason.status)
  }
  else {
    reject(reason.json())
  }
}
@Injectable({
  providedIn: "root"
})
export class HttpService {
  private static HttpCallsCount: number = 0;
  constructor(private http: Http, private storageService: StorageService) { }

  get(url: string, model: any = []): Promise<any> {
    var headers = new Headers();
    if (this.storageService.getAuthToken() != null) {
      var token = this
        .storageService
        .getAuthToken();
      headers.append("Authorization", 'bearer ' + token.token);
    }
    return new Promise<any>((resolve, reject) => {
      this
        .http
        .get(url, {
          params: model,
          headers: headers
        })
        .toPromise()
        .then((response) => {
          resolve(response.json());
        })
        .catch((reason) => {
          handleError(reason, reject);
        });
    });
  }

  post(url: string, model: any = {}, headers: Headers = null): Promise<any> {
    if (this.storageService.getAuthToken() != null) {
      if (headers == null) {
        headers = new Headers();
      }
      var token = this
        .storageService
        .getAuthToken();
      headers.append("Authorization", 'bearer ' + token.token);
    }
    return new Promise<any>((resolve, reject) => {
      this
        .http
        .post(url, model, { headers: headers })
        .toPromise()
        .then((response) => {
          resolve(response.json());
        })
        .catch((reason: Response) => {
          handleError(reason, reject);
        });
    });
  }

  put(url: string, model: any = {}): Promise<any> {
    var headers = new Headers();
    if (this.storageService.getAuthToken() != null) {
      var token = this
        .storageService
        .getAuthToken();
      headers.append("Authorization", 'bearer ' + token.token);
    }
    return new Promise<any>((resolve, reject) => {
      this
        .http
        .put(url, model, { headers: headers })
        .toPromise()
        .then((response) => {
          resolve(response.json());
        })
        .catch((reason) => {
          handleError(reason, reject);
        });
    });
  }

  delete(url: string): Promise<any> {

    var headers = new Headers();
    if (this.storageService.getAuthToken() != null) {
      var token = this
        .storageService
        .getAuthToken();
      headers.append("Authorization", 'bearer ' + token.token);
    }
    return new Promise<any>((resolve, reject) => {
      this
        .http
        .delete(url, { headers: headers })
        .toPromise()
        .then((response) => {
          resolve(response.json());
        })
        .catch((reason) => {
          handleError(reason, reject);
        });
    });
  }
}