import { Component, OnInit } from '@angular/core';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

	tasks: Task[];

	constructor(private taskService: TaskService) { }

	ngOnInit() {
		this.tasks = this.listAll();
	}

	listAll(): Task[] {
		return this.taskService.listAll();
	}

	remove($event: any, task: Task): void {
		$event.preventDefault();
		if (confirm('Do you want to remove the task "' + task.name + '"?')) {
			this.taskService.remove(task.id);
			this.tasks = this.listAll();
		}
	}

	alterStatus(task: Task): void {
		if (confirm('Do you want to change the status of the task "' + task.name + '"?')) {
			this.taskService.alterStatus(task.id);
			this.tasks = this.listAll();
		}
	}

}
