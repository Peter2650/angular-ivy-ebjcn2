import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyMemberComponent } from './lazy-member.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
    {
        path: '', component: LazyMemberComponent,
        children: [
            {
                path: 'list', component: ListComponent,
            },
            {
                path: 'edit/:id', component: EditComponent,
                outlet: 'lazyright',
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LazyMemberRoutingModule { }
