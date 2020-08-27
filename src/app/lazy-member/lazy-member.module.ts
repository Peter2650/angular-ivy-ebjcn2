import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyMemberComponent } from './lazy-member.component';
import { LazyMemberRoutingModule } from './lazy-member-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    LazyMemberComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    LazyMemberRoutingModule
  ]
})
export class LazyMemberModule { }
