import {
	Directive, ElementRef, Input, OnInit
} from '@angular/core';

@Directive({
  selector: '[taskCompleted]'
})
export class TaskCompletedDirective implements OnInit{
	@Input() TaskCompleted: boolean;

	constructor(private el: ElementRef) { }

	ngOnInit() {
		if (this.TaskCompleted) {
			this.el.nativeElement.style.textDecoration = "line-trought";
		}
	}
}
