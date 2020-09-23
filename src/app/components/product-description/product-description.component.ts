import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  showShortDesciption = true;
  constructor() { }

  ngOnInit(): void {
  }
  alterDescriptionText() {
    this.showShortDesciption = !this.showShortDesciption
 }

}
