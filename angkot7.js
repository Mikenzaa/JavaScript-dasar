function Angkot ( sopir, trayek, penumpang, kas){

    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang){
        this.penumpang.push (namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namPenumpang, bayar){
        if (this.penumpang.length === 0){
            alert ('angkot masih kosong');
            return false;
        }

        for ( var i = 0 ; i < this.penumpang.length ; i++){
            if ( this.penumpang[i] == namPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar ;
                return this.penumpang;
            }
        }

    }



}

var angkot1 = new Angkot ( 'mikal', ['pekanbaru', 'bukittingi'], [], 0);
var angkot2 = new Angkot ('omar', ['padang', 'pekanbaru'], [], 0);
