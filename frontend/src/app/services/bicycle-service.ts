import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {
  
  endpoint = 'http://localhost:8080/api/bicycles';

  constructor(private httpClient: HttpClient) { }

  getBicycles() {
    return this.httpClient.get(this.endpoint);
  }

  create(bicycle: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append("brand", bicycle.brand),
    body.append("model", bicycle.model);

    return this.httpClient.post(this.serverUrl, body.toString, { headers });
  }
                                                                                    //ServerUrl error, y completar con las demás funciones
  delete(id: any){
    return this.httpClient.delete(`${this.serverUrl}/${id}`);
  }

}
