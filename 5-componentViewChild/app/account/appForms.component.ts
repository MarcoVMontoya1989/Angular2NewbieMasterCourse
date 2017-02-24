import { Component, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Account } from '../account.model';

@Component({
  moduleId: module.id,
  selector: 'appForms',
  templateUrl: 'appForms.component.html'
})
export class AppFormsComponent {

  @Output() createAccount = new EventEmitter<Account>();

  private TitleForm: string;
  private DescrForm: string;
  private BalanForm: string;
  private idForm: any;

  _createAccount(title: string, description: string, balance: string) {
    this.TitleForm = title;
    this.DescrForm = description;
    this.BalanForm = balance;
    this.idForm = 10;

    var newAccount: Account = new Account(this.idForm.value, this.TitleForm, this.DescrForm, this.BalanForm);
    this.idForm++;
    this.createAccount.emit(newAccount);

    // title = '';
    // description = '';
    // balance = '';

  }

  // tslint:disable-next-line:member-ordering
  @Input() error: string;

// --------------------------VIEW CHILD--------------------------------
  @ViewChild('form') form: ElementRef;

  public resetForm(){
    this.form.nativeElement.reset();
  }


}


