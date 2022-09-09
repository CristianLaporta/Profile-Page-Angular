import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/user';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  menu: string = "email";
  user!:IUser;
  constructor(private HomepageService: HomepageService) { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.menu = this.HomepageService.menu;
    this.user = this.HomepageService.user;
  }

}
