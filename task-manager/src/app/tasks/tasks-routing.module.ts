import { Routes } from '@angular/router';

import { ListTaskComponent } from './list';
import { AddTaskComponent } from './add';
import { EditTaskComponent } from './edit';

export const TaskRoutes: Routes = [
	{
		path: 'tasks',
		redirectTo: 'tasks/list'
	},
	{
		path: 'tasks/list',
		component: ListTaskComponent
	},
	{
		path: 'tasks/add',
		component: AddTaskComponent
	},
	{
		path: 'tasks/edit/:id',
		component: EditTaskComponent
	}
];