

//------------------Property--------------------------
//variable dengan this. merupakan variable global. call with this.<variable>
// property adalah atribur dari sebuah object, 

//cara 1
class mail{
    constructor(){
        this.from = 'pengirim@decoding.com';
        this.contacts = [];
        this.yourotherproperty = 'values';
    }

    sendmessage(msg, to){
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this.contacts.push(to); //saving new contact
    };
}

//cara2
function othermail(){
    this.from = 'pengirim@decoding.com';
    this.contacts = [];
    this.yourotherproperty = 'values';
}

othermail.prototype.sendmessage = function (msg, to){
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
    this.contacts.push(to);
};

/*
dalam oop property dibagi menjadi 2
1. internal interface = method dan property yang dapat diakses oleh metode lain namun tidak bisa diambil/dijalankan diluar kelas tersebut
2. external interface = bisa diakses diluar kelas

dalam javascript tedapat 2 jenis akses identifier untuk sebuah field
1. public = dpt diakses dimanapun (default)
2. private = hanya diakses dikelas itu sendiri

cara memprivate sebuah method/property

---> cara 1 => dengan menggunakan var => hanya untuk class dengan function
function Mail() {
    this.from = 'pengirim@dicoding.com';
    var contacts = []; <------- cara 1
}

---> cara 2 => bisa function dan class
class Mail {
    constructor() {
        this._contacts = []; <-------- cara 2
        this.from = 'pengirim@dicoding.com';
    }
}

---> cara 3 => dengan prefix # => hanya untuk class
class Mail {
    #contacts = []; <------- cara 3
    constructor() {
        this.from = 'pengirim@dicoding.com';
    }
}
*/

//-------------------class method---------------
/// class method adalah function/method yang ada didalam sebuah objek. tidak bisa langsung di panggil, class harus diinisialisais menjadi object terlebih dahulu

const pesan = new mail(); //<---- inisialisasis kelas menjadi object
pesan.sendmessage('hallo','email@google.com')

//tidak bisa langsung mail.sendmessage

//------------------Static method----------------------
//bisa langsung dipanggil
class nextmail{
    static isValidPhone(phone){
        return typeof phone === 'number';
    }
}

nextmail.isValidPhone(11022229333394)

//----------------------constructor----------------------
//method/function yang pertama kali dijalankan ketika object dibuat.
//cara 1 =>untuk class
class pengiriman {
    constructor(params1, params2) {
      this.yourPropertyName = params1;
      this.yourPhoneNumber = params2;
      // do something here
    };
}

const kirim = new pengiriman('2 store house','0821234567');

//cara 2 =>dengan function statement
function pengiriman2 (params1, params2) {
    this.yourPropertyName = params1;
    this.yourPhoneNumber = params2;
  // do something here
}
