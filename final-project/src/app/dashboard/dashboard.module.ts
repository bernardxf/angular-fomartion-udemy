import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DataService } from './data.service';
import { DashboardRoutingComponent } from './dashboard-routing.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
	imports: [
		CommonModule,
		DashboardRoutingModule
	],
	declarations: [
		DashboardComponent,
		DashboardRoutingComponent
	],
	exports: [
		DashboardComponent
	],
	providers: [
		DataService
	]
})
export class DashboardModule { }
