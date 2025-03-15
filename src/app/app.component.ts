import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; //sử dụng directives(ngFor/ngIf)
import { FormsModule } from '@angular/forms'; //sử dụng [(ngModel)]

@Component({ //meta-data
  selector: 'app-root', //cách gọi component trong component khác
  imports: [
    RouterOutlet, 
    CommonModule, 
    FormsModule
  ], //package/module cần import/sử dụng trong component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent { //khai báo biến/hàm sẽ sử dụng trong component
  title = 'thaivm2';
  count:number = 0;
  countClick():number {
    // this.count++; //cộng thêm 1 đơn vị
    return this.count+=2; //cộng thêm bất kỳ += số;
  }
  listStudents = [
    {
      maSv: 'PH12345',
      ten: 'thaivm2',
      mail: 'thaivm2@fpt.edu.vn',
      nganh: 'Web',
      anh: 'https://picsum.photos/200',
      thi: 3
    },
    {
      maSv: 'PH12346',
      ten: 'thaivm3',
      mail: 'thaivm3@fpt.edu.vn',
      nganh: 'Mobile',
      anh: 'https://picsum.photos/200',
      thi: 5
    },
    {
      maSv: 'PH12347',
      ten: 'thaivm4',
      mail: 'thaivm4@fpt.edu.vn',
      nganh: 'Marketing',
      anh: 'https://picsum.photos/200',
      thi: 10
    }
  ]

}
