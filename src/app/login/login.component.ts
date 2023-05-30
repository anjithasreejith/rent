import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterserviceService } from '../registerservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route:Router,private lservice:RegisterserviceService){}
logindata={email:'',password:""};

  goto(){
this.route.navigate(['register']);
  }
  onsubmit(){
this.lservice.getlog(this.logindata).subscribe(res=>{
console.log(res);

})
  }
}
