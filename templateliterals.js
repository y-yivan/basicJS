const nama = "reihan";
const umur = 10;
console.log(`nama saya ${nama},
     umur saya ${umur} tahun`);

const harga = 50000;
const jumlah = 3;
console.log(`total harga: ${harga * jumlah}`);

const name = "andi";
const nilai = 80;
const kelas = 8;
let status;
if (nilai >= 75) {
    status = "lulus";
} else {
    status = "tidak lulus";
}
console.log(`nama ${name} nilai ${nilai + 5} status ${status}`);
console.log(`nama ${name} 
nilai ${nilai} 
kelas ${kelas}`);

const siswa ={
    nama : "reihan", kelas : 7, nilai : 80
};
console.log(`nama ${siswa.nama} kelas ${siswa.kelas} nilai ${siswa.nilai}`);

const jeneng = "Andi";
if (jeneng.indexOf("d") !== -1 && jeneng.indexOf("z") !== -1) {
    console.log("huruf ditemukan");
} else {
    console.log("huruf tidak ditemukan");
}
F
