import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/user';
import { HomepageService } from 'src/app/page/homepage.service';

@Component({
  selector: 'app-phone-profile',
  templateUrl: './phone-profile.component.html',
  styleUrls: ['./phone-profile.component.scss']
})
export class PhoneProfileComponent implements OnInit {
  user!: IUser;
  spinner:boolean = true;
  constructor(private HomepageService: HomepageService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.user = this.HomepageService.user;

  }
}
