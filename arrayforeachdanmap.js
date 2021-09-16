var angka = [1,2,3,4,5,6,7,8];
//var warna = ['merah', 'biru', 'hijau', 'kuning']
//for ( i = 0; i < angka.length; i ++)
//console.log ( angka[i]);
//angka.forEach(function(e){
 //   console.log(e)
//})
//warna.forEach (function(e, i){
//    console.log ( 'Warna ke - ' + (i + 1) + ' adalah ' + e )
//});

var angka2 = angka.map (function(e){
    return e*2;
})
console.log ( angka2.join (' - '));