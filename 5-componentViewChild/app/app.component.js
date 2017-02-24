"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var appForms_component_1 = require('./account/appForms.component');
var AppComponent = (function () {
    function AppComponent() {
        this._nextId = 8;
        this._accounts = [
            { id: 1, title: 'Bank Zys', description: 'Test account test', balance: '10000' },
            { id: 3, title: 'Bank Zys', description: 'Test account test', balance: '10000' },
            { id: 4, title: 'Bank Zys', description: 'Test account test', balance: '10000' }
        ];
        // createAcc(newAccount: Account){
        //   newAccount.id = this._nextId++;
        //   this._accounts.push(newAccount);
        // }
        this.createAccError = '';
        this.accLimit = 3;
    }
    AppComponent.prototype.createAcc = function (newAccount) {
        this.createAccError = '';
        if (this._accounts.length < this.accLimit) {
            newAccount.id = this._nextId++;
            this._accounts.push(newAccount);
            // cleaning the default values of title, description and balance
            this.form.resetForm();
        }
        else {
            this.createAccError = 'Only ' + this.accLimit + 'account(s) allowed';
        }
    };
    AppComponent.prototype.removeAcc = function (id) {
        this._accounts.splice(id, 1);
    };
    __decorate([
        core_1.ViewChild(appForms_component_1.AppFormsComponent), 
        __metadata('design:type', appForms_component_1.AppFormsComponent)
    ], AppComponent.prototype, "form", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map