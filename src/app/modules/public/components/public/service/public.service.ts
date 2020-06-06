import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  url = environment.urlDefault;
  constructor(private http: HttpClient) { }

  recuperarDados(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }
}
