import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Currency, Conversion, ConversionResponse } from '../models';
import { CurrencyService, ConverterService } from '../services';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

	private currencies: Currency[];
	private conversion: Conversion;
	private haveError: boolean;
	private conversionResponse: ConversionResponse;

	@ViewChild('conversionForm') conversionForm: NgForm;

	constructor(
		private currencyService: CurrencyService,
		private converterService: ConverterService) { }

	ngOnInit() {
		this.currencies = this.currencyService.listAll();
		this.init();
	}

	init(): void {
		this.conversion = new Conversion('USD', 'BRL', null);
		this.haveError = false;
	}

	convert(): void {
		if (this.conversionForm.form.valid) {
			this.converterService
				.convert(this.conversion)
				.subscribe(
					response => this.conversionResponse = response,
					error => this.haveError = true
				);
		}
	}

}
