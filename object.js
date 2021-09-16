//var pelajar = {
  //  nama : "Mikal Arrezik",
 //   umur : 16,  
  //  sekolah : "MAN 1 PEKANBARU",
  //  alamat : { 
//jalan : "Ikan Mas No.4",
      //  kota : "Pekanbaru",
 //   }

//}

//object literal
 var siswa = {
     nama : 'Mikal Arrezik',
     kelas : 'XI MIA IT',
     sekolah : 'MAN 1 PEKANBARU',
     jurusan : 'IT'
 }

 //function declaration

 function buatObjectSiswa (nama, kelas, sekolah, jurusan){
    var siswa = {};
    siswa.nama = nama;
    siswa.jurusan = jurusan;
    siswa.sekolah = sekolah;
    siswa.kelas = kelas;
    
    return siswa;
}

var siswa2 = buatObjectSiswa ('Mikal Arrezik', 'IT', 'MAN 1 PEKANBARU', 'XI MIA IT');
var siswa3 = buatObjectSiswa ('Omar Benzema', 'Kelas Asing', 'MTsN 1 PEKANBARU', '7.8');


//constrcutor
//wajib menggunakan new
//jika declaration,declaration dan return nya wajib ada
 
function IniSiswa (nama, kelas, sekolah, jurusan){
    this.nama = nama;
    this.kelas = kelas;
    this.sekolah = sekolah;
    this.jurusan = jurusan;
}

var siswa4 = new IniSiswa ('Mikal Arrezik', 'IT', 'MAN 1 PEKANBARU', 'XI MIA IT');




//this
//var a = 10;
//console.log (window.a);



//membuat object

//cara 1 - function declaration
 //function halo (){
  //  console.log('halo');
  //  console.log(this);
 //}
 //this.halo();

 //this mengembalikan object global


//cara 2 - object literal

//var obj = {a : 'mikal arrezik', b : 'baik'};
//obj.halo = function(){
   // console.log( 'halo');
   // console.log(this);
//}
//obj.halo ();
//this mengembalikan object yang bersangkutan


//cara 3 - constructor

function Halo(){
    console.log ('halo');
    console.log(this);
}
var obj1 = new Halo();
var obj2 = new Halo();

//this mengmbalikan object yang baru saja dibuat