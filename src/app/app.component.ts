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
