var jmlhAngkot = 10 ;
var angkotBeroperasi = 6 ;

for ( var noAangkot = 1; noAangkot<= jmlhAngkot ; noAangkot++){

    if(noAangkot <= 6 ){
        console.log ('Angkot No: ' + noAangkot + ' Beroperasi dengan baik.')
    } else if ( noAangkot == 8){
        console.log ('Angkot no. ' + noAangkot + ' sedang lembur')
    }else if ( noAangkot == 2){
        console.log ('Angkot no. ' + noAangkot + ' sedang libur')
    }else {
        console.log('Angkot No: ' + noAangkot + ' Sedang tidak beroperasi.')
    }
}