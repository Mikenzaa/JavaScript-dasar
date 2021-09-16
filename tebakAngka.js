alert ('tebak angka 1-10 \nkamu punya 3 kesempatan')
var comp = Math.random();

if ( comp < 0.34){
    comp = '1';
}else if ( comp >= 0.34 && comp < 0.67){
    comp = '2';
}else {
    comp = '3';
}