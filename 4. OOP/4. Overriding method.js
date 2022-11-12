//teknik untuk melakukan perombakan pada sebuah method ataupun constructor yang dimiliki oleh parent class. untuk penyesuaian child class
class Mail {
    constructor(author) {
      this.from = author;
      this._contacts = [];
    }

    sendMessage(msg, to) {
      console.log(`you send: ${msg} to ${to} from ${this.from}`);
      this._contacts.push(to);
    }

    showAllContacts() {
      return this._contacts;
    } 
}


//--1. overriding constructor
//super(variable)<-----------memanggil construct parent

class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phoneNumber) {
        super(phoneNumber); //<-----------pastikan isi dengan variable agar constructor parent dipanggil. ga diisi constructor parent ilang
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
}


//--2 overiding method
//super.methodName(); <-----------memanggil parent method
class line extends Mail {
    constructor(username, isBussinessAccount, phoneNumber) {
        super(phoneNumber);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
 
    /*  Overriding method => Melakukan Override Total
    sendMessage(msg, to) {
        console.log('Send by WA');
    }
    */
   sendMessage(msg, to){
        super.sendMessage(msg,to);
        console.log('send by wa');
   }
}