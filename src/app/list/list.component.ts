import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  constructor(private api:HttpClient) {} //thực thi khi khởi tạo component

  ngOnInit():void { //khai báo hàm sẽ được thực thi ngay khi component được load
    this.getList();
  }

  apiUrl:string = 'http://localhost:3000/students'; //đường dẫn để call API
  listStudents:any; //khởi tạo biến để hiển thị bảng bên html
  getList():void { //hàm lấy danh sách sinh viên từ json-server
    //cú pháp call api: this.api.method(apiUrl).subscribe(res => {})
    this.api.get(this.apiUrl).subscribe(res => {
      this.listStudents = res; //gán giá trị res cho biến listStudents
    })
  }

  onDelete(id:number):void {
    if (confirm('Bạn có chắc không?')) {
      //call API để xóa bản ghi
      this.api.delete(`${this.apiUrl}/${id}`).subscribe(res => {
        alert('Xóa thành công');
        this.getList(); //cập nhật lại danh sách mới
      })
    }
  }
}
