import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interface/user';


@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  menu: string = "email";
  user!: IUser;
  spinner: boolean = true
  constructor(private http: HttpClient) { }

  getUser() {
    this.http.get<IUser>("https://randomuser.me/api").subscribe((data: IUser) => {
      this.user = data;
      this.spinner = false;
    });
  }


}
