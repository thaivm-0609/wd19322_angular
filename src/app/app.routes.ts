import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';

//PATH KHÔNG BẮT ĐẦU BẰNG DẤU /(slash)
export const routes: Routes = [
    // {
    //     path: 'admin',
    //     children: [ //khai báo route con
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'create',
        component: CreateComponent,
        //cú pháp khai báo guard: guardType: [guardName]
        canActivate: [authGuard]
    },
    { //cú pháp truyền param /:tenParam
        path: 'edit/:id',
        component: EditComponent
    },
    //     ]
    // },
    { //đăng ký
        path: 'register',
        component: RegisterComponent
    },
    { //đăng nhập
        path: 'login',
        component: LoginComponent
    },
    { //NẰM Ở CUỐI
        path: '**',
        component: NotFoundComponent
    }
];
