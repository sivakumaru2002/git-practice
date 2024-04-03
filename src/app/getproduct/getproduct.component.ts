import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-getproduct',

  templateUrl: './getproduct.component.html',
  styleUrl: './getproduct.component.css',

})
export class GetproductComponent {
readonly getlink="https://uiexercise.theproindia.com/api/Product/GetAllProduct"
products : any;
constructor(private https:HttpClient){}
display =false;


getProduct(){
  this.https.get(this.getlink).subscribe((res)=>{
    console.log(res);
    this.products=res;  
    this.display=true;
  })
}

}
