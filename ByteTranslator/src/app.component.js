"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent(bcService) {
        this.bcService = bcService;
        this.base = 'byte';
        this.target = 'bit';
        this.qtde = 1;
        this.result = 0;
        this.press = 'click';
    }
    AppComponent.prototype.function_test = function () {
        console.log(this.press);
    };
    AppComponent.prototype.convert = function () {
        var convertValue = this.bcService.getConvertValue(this.base, this.target);
        this.result = this.qtde * convertValue;
    };
    AppComponent.prototype.isInvalid = function (value) {
        return !Number.isFinite(value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'byte-converter',
            template: "\n     <input type=\"number\" [(ngModel)]=\"qtde\"\n       [class.error]=\"isInvalid(qtde)\">\n    <byte-select [(selected)]=\"base\"></byte-select>\n    <byte-select [(selected)]=\"target\"></byte-select>\n    <button (click)=\"convert()\">Converter</button>\n    <strong>{{result | fixed:4}}</strong>\n     <p *ngIf=\"isInvalid(qtde)\">Tem que ser um numero</p>\n    ",
            styles: ["\n      input[type=number] {\n        width: 10ex;\n        text-align: right;\n      }\n      .error {\n        background-color: #ff6666;\n      }\n    "]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
