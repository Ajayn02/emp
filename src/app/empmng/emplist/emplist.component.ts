import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrl: './emplist.component.css'
})
export class EmplistComponent implements OnInit {

  employees:any=[]

  date:any=new Date()
  // cur:any =5000
  searchKey:any=""

  constructor(private api:ApiService , private toaster:ToastrService){}

  ngOnInit(): void {
      this.api.getEmployee().subscribe({
        next:(res:any)=>{
            // console.log(res);
            this.employees=res
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
  }

  handleDelete(id:any){
    this.api.deleteEmployee(id).subscribe({
      next:(res:any)=>{
        this.toaster.success("Deleted")
        this.ngOnInit()
      },
      error:(err:any)=>{
        console.log(err);
        this.toaster.error("Something Went Wrong")
      }
    })
  }

  sortById(){
    this.employees.sort((a:any,b:any)=>a.id-b.id)   
  }

  sortByName(){
    this.employees.sort((a:any,b:any)=>a.name.localeCompare(b.name))
  }

}


