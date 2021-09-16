var jmlhAngkot = 10 ;
var angkotBeroperasi = 6 ;
var noAangkot = 1;

if ( noAangkot <= angkotBeroperasi){
    console.log ('Angkot no. ' + noAangkot + ' beroperasi dengan baik.');
    noAangkot++;
}else if ( noAangkot=8 ){
    console.log ('Angkot no. ' + noAangkot + ' sedang lembur');
    noAangkot++;
}else {
    console.log('Angkot No: ' + noAangkot + ' Sedang tidak beroperasi.')

}
