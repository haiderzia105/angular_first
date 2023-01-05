import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-reuse-item',
  templateUrl: './reuse-item.component.html',
  styleUrls: ['./reuse-item.component.css']
})
export class ReuseItemComponent {
@Input() user:{name:string,email:string} = {name:"",email:""};
}
