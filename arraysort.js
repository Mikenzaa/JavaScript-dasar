var angka = [ 1,3,4,10,20,5,2,9,7];
angka.sort(function (a , b){
    return a - b ;
});
console.log (angka.join(' - '));