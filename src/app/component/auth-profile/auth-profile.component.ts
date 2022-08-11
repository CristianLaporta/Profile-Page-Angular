import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/user';
import { HomepageService } from 'src/app/page/homepage.service';

@Component({
  selector: 'app-auth-profile',
  templateUrl: './auth-profile.component.html',
  styleUrls: ['./auth-profile.component.scss']
})
export class AuthProfileComponent implements OnInit {
  user!: IUser;
  spinner: boolean = true;
  constructor(private HomepageService: HomepageService) { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.user = this.HomepageService.user;
    this.spinner = this.HomepageService.spinner;
  }
}

