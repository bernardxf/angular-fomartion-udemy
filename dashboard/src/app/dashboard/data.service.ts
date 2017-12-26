import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

	readonly dados = [
		['January', 33],
		['February', 68],
		['March', 49],
		['April', 15],
		['May', 80],
		['June', 27]
	]

	constructor() { }

	getData(): Observable<any> {
		return new Observable(observable => {
			observable.next(this.dados);
			observable.complete();
		})
	}

}