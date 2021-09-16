var angka = prompt ('Masukkan Angka');
if ( angka % 2 === 0) {
    alert (angka + ' adalah bilangan genap');
} else if ( angka % 1 === 0 ) {
    alert ( angka + ' adalah bilangan ganjil');
} else {
    alert ( 'yang anda masukkan bukan angka');
}