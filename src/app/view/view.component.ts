import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  Name:String;
  age:Number;
  Email;
  address;
  hobbies:String[];
  constructor() { 
    this.Name="Fuhrer";
    this.age=56;
    this.Email="killthemall@yahoo.com";
    this.address={hno:"011",str:"Line 4",dist:"EKM"};
    this.hobbies=["albert","gilbert","robert","Nobert"]
  }

  ngOnInit() {
  }

}
