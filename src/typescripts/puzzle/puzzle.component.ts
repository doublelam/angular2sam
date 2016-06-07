import {Component,OnInit,Output,EventEmitter} from 'angular2/core';

@Component({
	selector: 'my-puzzle',
	template: `
		<section [ngClass]="{childdiv:true}">
			<h3>child component</h3>
			<input type="text" (keyup)="eventEmit(txtInput.value)" #txtInput>
			<p>get from father's component{{fromFather}}</p>
		</section>
	`,
	inputs: ['fromFather'],
	outputs: ['eventEmittor']
}) 
export class PuzzleComponent implements OnInit{
	eventEmittor = new EventEmitter<string>();
	eventEmit(txt:string):void{
		this.eventEmittor.emit(txt);
	}
	ngOnInit():void{
		
	}
	
 }