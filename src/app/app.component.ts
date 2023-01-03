import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first_blog';
  displayValue = '';
  count = 0;
  name = "Haider";
  disable = true;
  able = false;
  kite='yellow';
  smile='orange';
  forever = ['num 1','num 2','num 3','num 4','num 5'];
  foreverDetails = [
    {
      name:'1',order:'1',group:'one' },
     { name:'2',order:'2',group:'two'},
     {name:'3',order:'3',group:'three'},
     { name:'4',order:'4',group:'four'},
     { name:'5',order:'5',group:'five'},
  ]
  data = "The University of Faisalabad";
  dataprint(){
    return "TUF";
  }
  getNum(num:number , text:string){
    alert(num);
    alert(text);
  }
  getData(val:string){
    console.warn(val);
  }
  getValue(val:string){
    console.warn(val);
    this.displayValue=val;
  }
  counter(type:string){
  type==='add' ? this.count++ : this.count--;
  }
  proxy(dis:string){
    this.disable = false;
  }
  proxy_1(dis:string){
    this.disable = true;
  }
}
