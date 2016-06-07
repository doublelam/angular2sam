System.register(['angular2/core', './puzzle/puzzle.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, puzzle_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (puzzle_component_1_1) {
                puzzle_component_1 = puzzle_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.txt = 'some';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styles: ["\n\t\t.fatherdiv {\n\t\t\tborder: 1px solid #aaa;\n\t\t\tpadding: 20px;\n\t\t}\n\t"],
                        template: "\n\t\t<div [ngClass]=\"{fatherdiv:true}\">\n\t\t\t<h2>father component</h2>\n\t\t\ttype some text\n\t\t\t<input type=\"text\" [(ngModel)]=\"fatherInput\">\n\t\t\t<p>your text:{{fatherInput}}</p>\n\t\t\t<p>get from child:{{txt}}</p>\n\t\t\t<my-puzzle [fromFather]=\"fatherInput\" (eventEmittor)=\"txt=$event\"></my-puzzle>\n\t\t</div>\n\t",
                        directives: [puzzle_component_1.PuzzleComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
