import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

	@ViewChild('formTask') formTask: NgForm;
	task: Task;

	constructor(
		private taskService: TaskService,
		private router: Router) { }

	ngOnInit() {
		this.task = new Task();
	}

	register(): void {
		if (this.formTask.form.valid) {
			this.taskService.register(this.task);
			this.router.navigate(["/tasks"]);
		}
	}

}
