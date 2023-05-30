import { Component } from '@angular/core';
import { RegisterserviceService } from '../registerservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private registers:RegisterserviceService){}

  registerdata={name:'',phoneno:'',email:'',password:'',cnfrmpswd:''};
  
  onsubmit(){
this.registers.getdata(this.registerdata).subscribe(res=>{
  console.log(res);
  
  
})
  }

}
