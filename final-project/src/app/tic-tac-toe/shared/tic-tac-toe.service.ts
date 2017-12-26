import { Injectable } from '@angular/core';

@Injectable()
export class TicTacToeService {

	private readonly SIZE_BOARD: number = 3;
	private readonly X: number = 1;
	private readonly O: number = 2;
	private readonly EMPTY: number = 0;

	private board: any;
	private numMovements: number;
	private victory: any;

	private _player: number;
	private _showStart: boolean;
	private _showBoard: boolean;
	private _showEnd: boolean;

	constructor() { }

	initialize(): void {
		this._showStart = true;
		this._showBoard = false;
		this._showEnd = false;
		this.numMovements = 0;
		this._player = this.X;
		this.victory = false;
		this.initializeBoard();
	}

	initializeBoard(): void {
		this.board = [this.SIZE_BOARD];
		for (let i = 0; i < this.SIZE_BOARD; i++) {
			this.board[i] = [this.EMPTY, this.EMPTY, this.EMPTY];
		}
	}

	get showStart(): boolean{
		return this._showStart;
	}

	get showBoard(): boolean{
		return this._showBoard;
	}

	get showEnd(): boolean{
		return this._showEnd;
	}

	get player(): number{
		return this._player;
	}

	startGame(): void {
		this._showStart = false;
		this._showBoard = true;
	}

	play(posX: number, posY: number): void {
		if (this.board[posX][posY] !== this.EMPTY || this.victory) {
			return;
		}

		this.board[posX][posY] = this._player;
		this.numMovements++;
		this.victory = this.endGame(posX, posY, this.board, this._player);
		this._player = (this._player === this.X) ? this.O : this.X;

		if (!this.victory && this.numMovements < 9) {
			this.cpuPlay();
		}

		if (this.victory !== false) {
			this._showEnd = true;
		}

		if (!this.victory && this.numMovements == 9) {
			this._player = 0;
			this._showEnd = true;
		}
	}

	endGame(row: number, column: number, board: any, player: number) {
		let end: any = false;

		if (board[row][0] === player && board[row][1] === player && board[row][2] === player) {
			end = [[row,0], [row,1], [row,2]];
		}

		if (board[column][0] === player && board[column][1] === player && board[column][2] === player) {
			end = [[column,0], [column,1], [column,2]];
		}

		if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
			end = [[0,0], [1,1], [2,2]];
		}

		if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
			end = [[0,2], [1,1], [2,0]];
		}

		return end;
	}

	cpuPlay(): void {
		let played: number[] = this.getPlayed(this.O);

		if (played.length <= 0) {
			played = this.getPlayed(this.X);
		}

		if (played.length <= 0) {
			let plays: any = [];
			for (let i = 0; i < this.SIZE_BOARD; i++) {
				for (let j = 0; j < this.SIZE_BOARD; j++) {
					if (this.board[i][j] === this.EMPTY) {
						plays.push([i, j]);
					}
				}
			}
			let k = Math.floor((Math.random() * (plays.length -1)));
			played = [plays[k][0], plays[k][1]];
		}

		this.board[played[0]][played[1]] = this._player;
		this.numMovements++;
		this.victory = this.endGame(played[0], played[1], this.board, this._player);
		this._player = (this._player === this.X) ? this.O : this.X;
	}

	getPlayed(player: number): number[] {
		let board = this.board;

		for (let row = 0; row < this.SIZE_BOARD; row++) {
			for (let col = 0; col < this.SIZE_BOARD; col++) {
				if (board[row][col] !== this.EMPTY) {
					continue;
				}
				board[row][col] = player;
				if (this.endGame(row, col, board, player)) {
					return [row, col];
				}
				board[row][col] = this.EMPTY;
			}
		}
		return [];
	}

	showX(posX: number, posY: number): boolean {
		return this.board[posX][posY] === this.X;
	}

	showO(posX: number, posY: number): boolean {
		return this.board[posX][posY] === this.O;
	}

	showVictory(posX: number, posY: number): boolean {
		let showVictory: boolean = false;

		if (!this.victory) {
			return showVictory;
		}

		for (let pos of this.victory) {
			if (pos[0] === posX && pos[1] === posY) {
				showVictory = true;
				break;
			}
		}
		return showVictory;
	}

	newGame(): void {
		this.initialize();
		this._showEnd = false;
		this._showStart = false;
		this._showBoard = true
	}

}
























