import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/user';
import { HomepageService } from 'src/app/page/homepage.service';

@Component({
  selector: 'app-email-profile',
  templateUrl: './email-profile.component.html',
  styleUrls: ['./email-profile.component.scss']
})
export class EmailProfileComponent implements OnInit {
  user!: IUser;
  spinner:boolean = true;
  constructor(private HomepageService: HomepageService) { }

  ngOnInit(): void {
}
  ngDoCheck(): void {
    this.user = this.HomepageService.user;

  }
}
