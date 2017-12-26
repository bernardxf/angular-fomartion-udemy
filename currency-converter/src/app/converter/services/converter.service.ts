import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Conversion, ConversionResponse } from '../models';

@Injectable()
export class ConverterService {

	private readonly BASE_URL = 'http://api.fixer.io/latest';

	constructor(private http: Http) {}

	convert(conversion: Conversion): Observable<ConversionResponse> {
		let params = `?base=${conversion.currencyFrom}&symbols=${conversion.currencyTo}`;

		return this.http
			.get(this.BASE_URL + params)
			.map(response => response.json() as ConversionResponse)
			.catch(error => Observable.throw(error));
	}

	quotationTo(conversionResponse: ConversionResponse, conversion: Conversion): number {
		if (conversionResponse === undefined) {
			return 0;
		}

		return conversionResponse.rates[conversion.currencyTo];
	}

	quotationFrom(conversionResponse: ConversionResponse, conversion: Conversion): string {
		if (conversionResponse === undefined) {
			return '0';
		}

		return (1 / conversionResponse.rates[conversion.currencyFrom]).toFixed(4);
	}

	quotationDate(conversionResponse: ConversionResponse): string {
		if (conversionResponse === undefined) {
			return '';
		}

		return conversionResponse.date;
	}

}
