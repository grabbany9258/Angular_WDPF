import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  xyz = "my self golam rababny";

  pqr = 100;

  // Property Binding

  x = "Hello";

  status = true;

  // perametere bole deya jay

   show(x:string){
    alert(x)
    // console.log("Yes, Message has come")

   }

   fname = "";

   fruits =["Apple", "Grape", "mango", "guava", "Grape"]


  //  For styling
   p2 = "p2Class"

  constructor() { }

  ngOnInit(): void {
  }

}
