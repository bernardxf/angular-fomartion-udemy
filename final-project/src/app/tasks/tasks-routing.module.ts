import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListTaskComponent } from './list';
import { AddTaskComponent } from './add';
import { EditTaskComponent } from './edit';
import { TasksRoutingComponent } from './tasks-routing.component';

export const TaskRoutes: Routes = [
	{
		path: 'tasks',
		component: TasksRoutingComponent,
		children: [
			{
				path: '',
				component: ListTaskComponent
			},
			{
				path: 'add',
				component: AddTaskComponent
			},
			{
				path: 'edit/:id',
				component: EditTaskComponent
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(TaskRoutes)
	],
	exports: [
		RouterModule
	]
})
export class TasksRoutingModule {
}