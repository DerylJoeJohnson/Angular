import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any[]=[];
  cart=[];
  view:Boolean=false;
  constructor() { 
    this.products=[{name:"Printer",pr:"8000",co:"HP"},{name:"Scanner",pr:"12000",co:"HP"},{name:"keyboard",pr:"1800",co:"HP"}]
    
  }
 
  ngOnInit() {
  }
  public add(p){
    
              let data={name:p.name,pr:p.pr,co:p.co}
            
              this.cart.push(data);
  
    }
    public remove(i){
    
    
       this.cart.splice(i, 1);
     
      }
      public show()
      {
        this.view=true;
      }
      public hide()
      {
        this.view=false;
      }

}
