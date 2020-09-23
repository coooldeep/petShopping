import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  model;

  time = {hour: 14, minute: 30};
  
  time2 = {hour: 15, minute: 30};
  meridian = true;
  
  toggleMeridian() {
      this.meridian = !this.meridian;
  }

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
   }

  ngOnInit(): void {
  }

}
