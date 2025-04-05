import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private auth:AuthService) {}

  onLogin(data:any):void { //hàm onLogin khi ng dùng bấm nút submit
    this.auth.login(data).subscribe(res => {
      //B1: lấy accessToken từ res
      const token = res?.accessToken;
      //B2: lưu token vào trong localStorage
      localStorage.setItem('key',token);
    })
  }
}
