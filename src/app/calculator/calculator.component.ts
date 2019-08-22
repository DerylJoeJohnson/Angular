import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  view:boolean=false;
  view1:boolean=false;
  n1:any;
  n2:any;
  s:number;
  d:number;
  r:string;
  q:number;
  constructor() { 
    
  }

  ngOnInit() {
  }

public add()
{ 
  this.view=!this.view;
  this.s= parseInt(this.n1)+parseInt(this.n2);
}
public diff()
{ 
  this.view1=!this.view1;
  this.d= parseInt(this.n1)-parseInt(this.n2);
}
public pass()
{
  this.view=!this.view;
   this.q=parseInt(this.n1)
  if(this.q>50)
  { 
    this.r="PASS";
  }
  else
  {
    this.r="Fail"
  }

}
}
