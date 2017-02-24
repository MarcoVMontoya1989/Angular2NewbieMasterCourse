export class Account {
    id: any;
    title: string;
    balance: string;
    description: string;

    public constructor(id: any, title: any, description: any, balance: any) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.balance = balance;
    }
}