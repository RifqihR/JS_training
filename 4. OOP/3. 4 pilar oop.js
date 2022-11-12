//1. encapsulation -->klo privat tidak bisa di akses diluar class
//2. abstraksi --> sebuah object hanya menunjukkan operasi secara high-level
//3. inheritance --> beberapa objeck memiliki karakter yang sama, namun bukan objek yang sama

//4. polymership --> bentuk bisa berbeda beda setiap penggunaan

//cara1: untuk class :$ class ChildClassName extends ParentsClassName{}
//cara2: untuk fungsi/class :$ ChildClassName.prototype = new ParentClassName()
//example

class mail{
    constructor(author){
        this.from = author;
        this._contacts =[];
    }

    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }

    showAllContacts() {
        return this._contacts;
      }
}

class WhatsApp extends Mail {  //<---------inheritance
    constructor(author) {
      super(author);
      this.username = 'dicoding';
      this.isBusinessAccount = true;
    }
    myProfile() {
      return `my name ${this.username}, is ${this.isBusinessAccount ? 'Business' : 'Personal'}`;
    }
}

const wa1 = new WhatsApp('080111000222');
console.log(wa1.myProfile());