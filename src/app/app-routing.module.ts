import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './member/list/list.component';
import { EditComponent } from './member/edit/edit.component';
import { MemberComponent } from './member/member.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'member', component: MemberComponent,
        children: [
          {
            path: 'list', component: ListComponent,
          },
          {
            path: 'edit/:id', component: EditComponent,
            outlet: 'right'
          }
        ]
      },
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
