import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/enviroment-develop';
import { IUser } from '../model/users.interface';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }


   getPosts(): Observable<IUser[]> {
    return this.http.get<IUser[]>(environment.apiUrl);
   }
}
