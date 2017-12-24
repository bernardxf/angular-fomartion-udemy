import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { TaskService, TaskCompletedDirective } from './shared';
import { ListTaskComponent } from './list';
import { AddTaskComponent } from './add';
import { EditTaskComponent } from './edit';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule
	],
	declarations: [
		ListTaskComponent,
		AddTaskComponent,
		EditTaskComponent,
		TaskCompletedDirective
	],
	providers: [
		TaskService
	]
})
export class TasksModule { }
