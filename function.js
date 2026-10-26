function belajar(materi) {
    console.log("Belajar " + materi);
}

function salam(nama) {
    console.log("Assalamualaikum " + nama);
}

//belajar("JavaScript");
//belajar("HTML");
//belajar("CSS");

function hasil(hasil) {
    // console.log(hasil);
}
//hasil(60 * 30 / 20);
//hasil(70 / 10 * 20);
//hasil(2 ** 8 / 2);

function hitungTotal(harga, jumlah) {
   // console.log(`Harga Apel perbuah: ${harga}, jumlah: ${jumlah}`);
    return harga * jumlah;
}
//let total = hitungTotal(10000, 3);
//let diskon = 5000;
//let bayar = total - diskon;
//console.log("Diskon: " + diskon);
//console.log("Total Bayar: " + bayar);
function luasLingkaran(pi, jari) {
  //  console.log(`phi: ${pi}`);
   // console.log(`Jari-Jari: ${jari}`);
   // return pi * (jari ** 2);
}
let totall = luasLingkaran(3.14, 7);
//console.log ("hasil Luas =", totall);

function kelilingLingkaran(pi, jari) {
  //   console.log(`phi: ${pi}`);
    // console.log(`Jari-Jari: ${jari}`);
    // return 2 * pi * jari
}
let tota = kelilingLingkaran(3.14, 7);
//console.log ("hasil Keliling =", tota);

function volbalok(p, l, t) {
    return p * l * t;
}
let vol = volbalok(17, 5, 10);
//console.log("Volume Balok =", vol);

const tambah2 = (a, b) => {
    return a + b;
}   
//console.log(tambah2(5, 2));
const  hitungTotal2 = (harga, jumlah) => {
   //  console.log(`Harga Apel perbuah: ${harga}`);
   //  console.log(`Jumlah: ${jumlah}`);
    return harga * jumlah
}


 let total = hitungTotal(5000, 4);
 let diskon = 2000;
 let bayar = total - diskon

//console.log ("Diskon =" , diskon);
//console.log ("Harga bayar =" , bayar);

function tampilkanumur() {
    let umur = 20;
    console.log(umur);
}
//tampilkanumur();
function tampilkanbb() {
    let bb = 70; 
    console.log(bb);
}
tampilkanbb();