var warna = ['merah', 'biru', 'hijau' ];

warna.splice(  1, 2 , 'kuning');
console.log ( warna.join ( '- '));

var warna2 = ['merah', 'biru', 'hijau', 'kuning'];
var arr = warna2.slice( 1, 3);
console.log (arr.join('- '));