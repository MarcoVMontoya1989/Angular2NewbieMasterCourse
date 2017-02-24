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
var account_model_1 = require('../account.model');
var AppFormsComponent = (function () {
    function AppFormsComponent() {
        this.createAccount = new core_1.EventEmitter();
    }
    AppFormsComponent.prototype._createAccount = function (title, description, balance) {
        this.TitleForm = title;
        this.DescrForm = description;
        this.BalanForm = balance;
        this.idForm = 10;
        var newAccount = new account_model_1.Account(this.idForm.value, this.TitleForm, this.DescrForm, this.BalanForm);
        this.idForm++;
        this.createAccount.emit(newAccount);
        // title = '';
        // description = '';
        // balance = '';
    };
    AppFormsComponent.prototype.resetForm = function () {
        this.form.nativeElement.reset();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AppFormsComponent.prototype, "createAccount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AppFormsComponent.prototype, "error", void 0);
    __decorate([
        core_1.ViewChild('form'), 
        __metadata('design:type', core_1.ElementRef)
    ], AppFormsComponent.prototype, "form", void 0);
    AppFormsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'appForms',
            templateUrl: 'appForms.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppFormsComponent);
    return AppFormsComponent;
}());
exports.AppFormsComponent = AppFormsComponent;
//# sourceMappingURL=appForms.component.js.map