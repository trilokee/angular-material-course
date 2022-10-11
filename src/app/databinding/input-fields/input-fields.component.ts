import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.scss']
})
export class InputFieldsComponent implements OnInit {

  uservalue:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onfieldChange(value:any){
    if(value==="INTERMEDIATE"){
      this.uservalue=3;
    }
    else if(value==="BEGINNER"){
      this.uservalue=1;
    }
   else if(value==="ADVANCED"){
      this.uservalue=5;
    }
   console.log("value>>>",value)
  }
}
