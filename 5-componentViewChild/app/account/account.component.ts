import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../account.model';

@Component({
    moduleId: module.id,
    selector: 'account',
    templateUrl: 'account.component.html',
    styleUrls: ['account.component.css']
})
export class AccountComponent {

    @Input('accounts') _accounts: Array<Account>;
    @Output('delete') DeleteAccountComp = new EventEmitter<Number>();


    _removeAccountComp(index: number) {
        this.DeleteAccountComp.emit(index);
    }

    // tslint:disable-next-line:member-ordering
    _selected: Array<boolean> = [
        false, false
    ];

    select(index: number) {
        this._selected[index] = !this._selected[index];
    }
}