import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
        component: CreateComponent
    },
    { //cú pháp truyền param /:tenParam
        path: 'edit/:id',
        component: EditComponent
    },
    //     ]
    // },

    { //NẰM Ở CUỐI
        path: '**',
        component: NotFoundComponent
    }
];
