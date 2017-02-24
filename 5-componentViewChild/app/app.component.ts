import { Component, ViewChild } from '@angular/core';
import { Account } from './account.model';
import { AppFormsComponent } from './account/appForms.component';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  private _nextId = 8;

  private _accounts: Array<Account> = [
    { id: 1, title: 'Bank Zys', description: 'Test account test', balance: '10000' },
    { id: 3, title: 'Bank Zys', description: 'Test account test', balance: '10000' },
    { id: 4, title: 'Bank Zys', description: 'Test account test', balance: '10000' }
  ];

  // createAcc(newAccount: Account){
  //   newAccount.id = this._nextId++;
  //   this._accounts.push(newAccount);
  // }
  private createAccError: string = '';
  private accLimit: number = 3;

  createAcc(newAccount: Account) {
    this.createAccError = '';

    if (this._accounts.length < this.accLimit) {
      newAccount.id = this._nextId++;
      this._accounts.push(newAccount);

      // cleaning the default values of title, description and balance
      this.form.resetForm();

    } else {
      this.createAccError = 'Only ' + this.accLimit + 'account(s) allowed';
    }
  }

  removeAcc(id: any) {
    this._accounts.splice(id, 1);
  }

  // tslint:disable-next-line:member-ordering
  @ViewChild(AppFormsComponent) form: AppFormsComponent;
}


