//class memberikan informasi tentang suatu objek. bisa dibilang object adalah instance dari sebuah class

//penulisan Class
//---->1.  penulisan class menggunakan sintaksi function

//--->1.1 function dengan pendekatan prototype --->tidak mengcopy object pada prototype
function Mail(){
    this.from = 'pengirim@mail.com'
};

Mail.prototype.sendMessage = function(msg, to){
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
};

//--->1.2. function tanpa pendekatan prototype ---->mengcopy setiap object
function pesan(){
    ini.dari = 'sender@mail.com',
    ini.sendMessage = function(psn, ke){
        console.log(`you send: ${psn} to ${ke} from ${ini.dari}`)
    };
};

const mail1 = new Mail();

mail1.sendMessage('haloo', 'receiver@mail.co.id');
//--------------------------------------------------------------------------------------\\

//--->2. sintaksi Class --->sama seperti prototype

class newmail {
    constructor(){
        this.from = "pengirim@mail.com";
    }

    sendmessage(msg, to){
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
}

const mail2 = new newmail();
mail2.sendmessage('hallo','penerima@mail.com')