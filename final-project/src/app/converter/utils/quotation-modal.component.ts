import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ConversionResponse, Conversion } from '../models';
import { ConverterService } from '../services';

@Component({
  selector: 'quotation-modal',
  templateUrl: './quotation-modal.component.html',
  styleUrls: ['./quotation-modal.component.css']
})
export class QuotationModalComponent implements OnInit {

	@Input() id: string;
	@Input() conversionResponse: ConversionResponse;
	@Input() conversion: Conversion = new Conversion();
	@Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

	constructor(private converterService: ConverterService) { }

	ngOnInit() {}

	newQuery() {
		this.onConfirm.emit();
	}

	get convertedValue(): string {
	  	if (this.conversionResponse === undefined) {
	  		return '0';
	  	}
	  	return (this.conversion.value * this.conversionResponse.rates[this.conversion.currencyTo]).toFixed(2);
	}

	get quotationFrom(): string {
		return this.converterService.quotationFrom(this.conversionResponse, this.conversion);
	}

	get quotationTo(): number {
		return this.converterService.quotationTo(this.conversionResponse, this.conversion);
	}

	get quotationDate(): string {
		return this.converterService.quotationDate(this.conversionResponse);
	}

}
