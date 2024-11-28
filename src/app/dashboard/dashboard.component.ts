import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CalenderComponent } from '../calender/calender.component';
import { ChartComponent } from '../chart/chart.component';
import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent,CalenderComponent,ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

  

export class DashboardComponent implements OnInit {

  empCount:number=0


  constructor(private api:ApiService){}


  ngOnInit(): void {
      this.api.getEmployee().subscribe({
        next:(res:any)=>{
          this.empCount=res.length
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
  }
}
