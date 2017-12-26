import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ConverterComponent } from './components';
import { CurrencyService, ConverterService } from './services';
import { NumberDirective } from './directives';
import { QuotationModalComponent } from './utils';
import { DateBrPipe } from './pipes';
import { ConverterRoutingModule } from './converter-routing.module';
import { ConverterRoutingComponent } from './converter-routing.component';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		ConverterRoutingModule
	],
	declarations: [
		ConverterComponent,
		NumberDirective,
		QuotationModalComponent,
		DateBrPipe,
		ConverterRoutingComponent
	],
	exports: [
		ConverterComponent
	],
	providers: [
		CurrencyService,
		ConverterService
	]
})
export class ConverterModule { }
