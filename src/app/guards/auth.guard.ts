import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  //lấy token từ trong localStorage
  let valid = false;
  const token = localStorage.getItem('key');
  //nếu có token => trả về true => cho truy cập
  if (token) {
    //decode token để kiểm tra dữ liệu hợp lệ hay không?
    const info = jwtDecode(token);
    //nếu hạn sử dụng > thời gian hiện tại
    if (info?.exp as any > Date.now()/1000) { 
      valid = true;
    }
  }
  //ngược lại => trả về false => đưa ng dùng về trang login
  const router = inject(Router);
  router.navigate(['/login']);

  return valid;
};
