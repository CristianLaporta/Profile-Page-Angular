import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/user';
import { HomepageService } from 'src/app/page/homepage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  user!: IUser;
  spinner: boolean = true;
  menu: string = "email";
  constructor(private HomepageService: HomepageService) { }

  ngOnInit(): void {
    this.HomepageService.getUser();
  }
  ngDoCheck(): void {
    this.user = this.HomepageService.user;
    this.spinner = this.HomepageService.spinner;
  }
  changeMenu(param: string) {
    this.menu = param;
    this.HomepageService.menu = param;
  }
}
