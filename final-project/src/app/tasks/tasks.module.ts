import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TaskService, TaskCompletedDirective } from './shared';
import { ListTaskComponent } from './list';
import { AddTaskComponent } from './add';
import { EditTaskComponent } from './edit';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksRoutingComponent } from './tasks-routing.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		TasksRoutingModule
	],
	declarations: [
		ListTaskComponent,
		AddTaskComponent,
		EditTaskComponent,
		TaskCompletedDirective
		,TasksRoutingComponent
	],
	providers: [
		TaskService
	]
})
export class TasksModule { }
