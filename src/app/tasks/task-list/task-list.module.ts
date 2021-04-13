import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskListPageRoutingModule } from './task-list-routing.module';

import { TaskListPage } from './task-list.page';
import { TaskListItemPage } from './../task-list-item/task-list-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskListPageRoutingModule
  ],
  declarations: [TaskListPage, TaskListItemPage],
  exports: [TaskListItemPage]
})
export class TaskListPageModule {}
