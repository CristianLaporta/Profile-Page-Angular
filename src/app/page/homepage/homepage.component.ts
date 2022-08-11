import { Component, OnInit } from '@angular/core';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  menu: string = "email";
  constructor(private HomepageService: HomepageService) { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.menu = this.HomepageService.menu;
  }

}
