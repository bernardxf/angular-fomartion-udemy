import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicTacToeComponent } from './tic-tac-toe.component';
import { TicTacToeService } from './shared';
import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';
import { TicTacToeRoutingComponent } from './tic-tac-toe-routing.component';

@NgModule({
	imports: [
		CommonModule,
		TicTacToeRoutingModule
	],
	declarations: [
		TicTacToeComponent,
		TicTacToeRoutingComponent
	],
	exports: [
		TicTacToeComponent
	],
	providers: [
		TicTacToeService
	]
})
export class TicTacToeModule { }
