import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({ //meta-data
  selector: 'app-root', //cách gọi component trong trang khác
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent { //khai báo biến/hàm sẽ sử dụng trong component
  title = 'thaivm2';
  listStudents = [
    {
      maSv: 'PH12345',
      ten: 'thaivm2',
      mail: 'thaivm2@fpt.edu.vn',
      nganh: 'Web',
      anh: 'https://picsum.photos/200'
    },
    {
      maSv: 'PH12346',
      ten: 'thaivm3',
      mail: 'thaivm3@fpt.edu.vn',
      nganh: 'Mobile',
      anh: 'https://picsum.photos/200'
    },
    {
      maSv: 'PH12347',
      ten: 'thaivm4',
      mail: 'thaivm4@fpt.edu.vn',
      nganh: 'Marketing',
      anh: 'https://picsum.photos/200'
    }
  ]

}
