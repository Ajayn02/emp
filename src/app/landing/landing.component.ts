import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  constructor(private api:ApiService , private router:Router , private toast:ToastrService){

  }

  formData:any={
    email:"",pass:""
  }

  onSubmit(data:any){
    // console.log(data);
    // console.log(this.formData);
    this.api.userLogin().subscribe({
      next:(res:any)=>{
        // console.log(res);
        
        if(res.email==this.formData.email && res.password==this.formData.pass){
          // alert("Login Success")
          this.toast.success("Login Success")
          sessionStorage.setItem('username',res.usename)
          this.router.navigateByUrl('dash')
        }else{
          // alert("Login Failed")
          this.toast.error("Login Failed")

        }
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
    
  }
}
