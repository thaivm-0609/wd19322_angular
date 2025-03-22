import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  constructor(
    private actRoute:ActivatedRoute,
    private api:HttpClient
  ) {}

  apiUrl:string = 'http://localhost:3000/students';
  id:number = 0;
  oldStudent: any;

  ngOnInit():void {
    this.id = this.actRoute.snapshot.params['id']; //gán lại giá trị id bằng tham số truyền trên URL
    console.log(this.id);
    this.getDetail();
  }

  getDetail():void {
    console.log(this.id);
    this.api.get(`${this.apiUrl}/${this.id}`).subscribe(res => {
      if (res) {
        this.oldStudent = res;
      }
    })
  }

  onEdit(data:any):void {

  }
}
