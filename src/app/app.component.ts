import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Header';
  printFormData:any='';
  funshow = "";
  today = Date();
  business = '';
  goodV = "x";
  nice = 10;
  reuseArray=[
    {name:"Haider",email:"haider.1@gmail.com"},
    {name:"Ali",email:"ali.1@gmail.com"},
    {name:"Kamran",email:"kamran.1@gmail.com"},
    {name:"Zahid",email:"zahid.1@gmail.com"},
  ]
  list:any[]=[];
  off = true;
  userData:any = {};
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
  ];
  okaythen = [
    { name:'don',num:'20',group:['insta','fb','twitter']},
    { name:'ken',num:'32',group:['insta','fb','twitter']},
    { name:'ben',num:'21',group:['insta','fb','twitter']},
    { name:'ten',num:'10',group:['insta','fb','twitter']},
  ];
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
  getForm(data:NgForm){
  console.warn("data");
  this.userData = data;
  }
  getdelete(){
 this.off = !this.off;
  }
  addTask(item:string){
    this.list.push({id:this.list.length,name:item});
    console.warn(this.list);

  }
  removeTask(id:number){
  console.warn(id);
  this.list=this.list.filter(item=>item.id!==id);
  }
  parentChild(){
    this.nice = Math.floor(Math.random()*10);
  }
  
  updateValue(good:string){
    console.warn(good);
    this.goodV=good;
  }

  testFun(karma:string | number) {

    if(typeof karma === "number"){
    console.warn(karma*8);
    }

  }
  getFormData(item:any)
  {
  console.warn(item);
  this.printFormData = item;
  }

  loginGroup = new FormGroup({
  name1 : new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
  password : new FormControl('',[Validators.required, Validators.minLength(5)]),
  email: new FormControl('',[Validators.required, Validators.email]),
  })
  get name1()
  {
  return this.loginGroup.get('name1');
  }
  get password()
  {
  return this.loginGroup.get('password');
  }
  get email()
  {
  return this.loginGroup.get('email');
  }
}
