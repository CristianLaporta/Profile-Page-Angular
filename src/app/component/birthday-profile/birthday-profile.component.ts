import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/user';
import { HomepageService } from 'src/app/page/homepage.service';

@Component({
  selector: 'app-birthday-profile',
  templateUrl: './birthday-profile.component.html',
  styleUrls: ['./birthday-profile.component.scss']
})
export class BirthdayProfileComponent implements OnInit {
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