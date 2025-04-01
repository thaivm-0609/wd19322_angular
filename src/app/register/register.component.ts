import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(
    // private api:HttpClient, => chuyển sang sử dụng service
    private auth:AuthService, //import service vào component
    private router:Router
  ) {}

  // apiUrl:string = 'http://localhost:3000/register'; => bỏ, do chuyển sang dùng service
  
  onRegister(data:any):void {
    // this.api.post(this.apiUrl,data).subscribe(res => { => bỏ call api trực tiếp => gọi sang service
    this.auth.register(data).subscribe(res => { //gọi sang hàm register ở trong service
      if (res) {
        alert('Đăng ký thành công');
        this.router.navigate(['/login']); //đẩy ng dùng về trang đăng nhập
      }
    })
  }
}
