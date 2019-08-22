import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  view:boolean=false;
  name:string;
  constructor() { }

  ngOnInit() {
  }
public msg()
{
  this.view=!this.view;
}
}
