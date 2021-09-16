var jmlhAngkot = 10 ;
var angkotBeroperasi = 6 ;

for ( var noAangkot = 1; noAangkot<= jmlhAngkot ; noAangkot++){

    if(noAangkot <= 6 && noAangkot !== 5){
        console.log ('Angkot No: ' + noAangkot + ' Beroperasi dengan baik.')
    } else if ( noAangkot == 8 || noAangkot == 10 || noAangkot == 5){
        console.log ('Angkot no. ' + noAangkot + ' sedang lembur')
    }else {
        console.log('Angkot No: ' + noAangkot + ' Sedang tidak beroperasi.')
    }
}