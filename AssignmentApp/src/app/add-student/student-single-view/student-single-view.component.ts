import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-student-single-view',
  templateUrl: './student-single-view.component.html',
  styleUrls: ['./student-single-view.component.scss']
})
export class StudentSingleViewComponent implements OnInit {
  students :any;
  constructor(private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.dataService.getSingle(
        parseInt(id),
        "http://localhost:3000/students", 
        (response:any)=>{this.students = response;}
        );
    }
  }

}
