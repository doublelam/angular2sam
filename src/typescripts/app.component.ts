import {Component} from 'angular2/core';
import {PuzzleComponent} from './puzzle/puzzle.component'
@Component({
    selector: 'my-app',
	styles: [`
		.fatherdiv {
			border: 1px solid #aaa;
			padding: 20px;
		}
	`],
    template: `
		<div [ngClass]="{fatherdiv:true}">
			<h2>father component</h2>
			type some text
			<input type="text" [(ngModel)]="fatherInput">
			<p>your text:{{fatherInput}}</p>
			<p>get from child:{{txt}}</p>
			<my-puzzle [fromFather]="fatherInput" (eventEmittor)="txt=$event"></my-puzzle>
		</div>
	`,
	directives: [PuzzleComponent],
})
export class AppComponent {
	txt = 'some';
 }
