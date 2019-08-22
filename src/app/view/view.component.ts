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
  projects:any[]=[]; 
  constructor() { 
    this.Name="Fuhrer";
    this.age=56;
    this.Email="killthemall@yahoo.com";
    this.address={hno:"011",str:"Line 4",dist:"EKM"};
    this.hobbies=["albert","gilbert","robert","Nobert"]
    this.projects=[{name:"Red Star",dr:"15 DAys",ed:"12-7-43"},{name:"Mission Impossibe",dr:"2 days",ed:"16-3-1945"}]
  }

  ngOnInit() {
  }
  public add(){
  let data={name:"Icarus",dr:"60 DAys",ed:"12-7-93"} 
 
          
            this.projects.push(data);

  }

}
