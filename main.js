class BankAccount
{
    constructor(_accountNumber, _owner)
    {
      this.accountNumber = _accountNumber
      this.owner = _owner
    }

    transactions = []

    balance()
    {
      if (this.transactions.length == 0)
      {
        console.log("Ain't No History Here")
      }
      else
      {
        let sum = 0;
        for (let index = 0; index < this.transactions.length; index++)
        {
          sum += this.transactions[index].ammount
        }
        console.log("Balance: " + sum)
        return sum;
      }
    }

    deposit(amt) {
      if (amt < 0) {
        console.log("Nice try.");
        return;
      }
      let currTransaction = new Transaction(amt, this.owner)
      this.transactions.push(currTransaction)
    }

    charge(payee, amt)
    {
      if (this.balance() < amt) {
        console.log("You have no money. Your transaction is declined.")
        return;
      }
      
      let currTransaction = new Transaction(-amt, payee)
      this.transactions.push(currTransaction)
    }
}


class Transaction
{
  constructor(_ammount, _payee)
  {
    this.ammount = _ammount;
    this.payee = _payee;

    const d = new Date();
    this.date = d.getDay();
  }

  date

}
 

let myFirstBankAccount = new BankAccount("xxx666", "Pepe Silvia");
let myFirstTransaction = new Transaction(40.00, "Cheeky Badger");

myFirstBankAccount.deposit(123.45)
myFirstBankAccount.deposit(1337.00)
myFirstBankAccount.balance()