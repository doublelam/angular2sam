import {Component} from 'angular2/core';

@Component({
	selector: 'search-comp',
	properties:['title'],
	template: `
		<div><input #inputE/></div>
		<div [class.red]="inputE.value">
			sasasa
		</div>
	`,
	styles: [`
		.red{
			color:red;
		}
	`]
})
export class SearchComponent {
	
 }