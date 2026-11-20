const nilai = [80, 75, 90, 85, 70, 60, 95, 100, 50, 40];

nilai.forEach((angka) => {
    //console.log(angka + 5);
});

nilai.forEach((angka) => {
    if(angka >= 75) {
       // console.log(angka + " - Lulus");
    } else {
        //console.log(angka + " - Remedial");
    }
});

const baru = ["yakobus", "paulus", "yohanes", "petrus", "andreas", "filipus", "thomas", "lucas", "johanes", "iskariot"];

baru.forEach((nama) => {
   // console.log("halo, " + nama);
});
const siswa =[
    {nama:"Joko", alamat:"Solo", umur:12,kelas:7},
    {nama:"xia", alamat:"semarang", umur:27, kelas:13},
    {nama:"keyya", alamat:"papua", umur:28, kelas:4}
];
const namaSaja = siswa.map((namaDoang) => namaDoang.nama);
console.log(namaSaja);
const umurSaja = siswa.map((namaDoang) => namaDoang.umur);
console.log(umurSaja);

const nilaiBaru = [80,65,90,75,60,85,70,95,100,50];
const nilaitdkLulus = nilaiBaru.filter((angka) => {
    return angka  <= 75;
});
//console.log(nilaitdkLulus);

const arrayAngka = [0, 1, 2, 3, 4 ,5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const arrayrya = arrayAngka.filter((jumlah) => {
    return jumlah %2 === 0 })
    //console.log(arrayrya)
    const warticket = [
        {nama : "konser", jumlah : 300, dipesan : 200},
        {nama : "seminar", jumlah : 100, dipesan : 90},
        {nama : "workshop", jumlah : 80, dipesan : 80}
    ];
   let sisaTiket = warticket.filter((tiket) => tiket.jumlah - tiket.dipesan >= 30);
   let tikethabis = warticket.filter((tiket) => tiket.jumlah - tiket.dipesan <= 0);
   let sisaTiket2 = warticket.filter((tiket) => tiket.jumlah - tiket.dipesan !== 0  && tiket.jumlah - tiket.dipesan < 100);
//console.log(sisaTiket)
//console.log(tikethabis)
//console.log(sisaTiket2)

const nilaiSiswa = [
  {nama:"Andi", nilai:80},
  {nama:"Budi", nilai:65},
  {nama:"Citra", nilai:90},
  {nama:"Dina", nilai:75},
  {nama:"Eko", nilai:85}
]

nilaiSiswa.forEach((siswa) => {
  if (siswa.nilai >= 75) {
 //   console.log(siswa.nama, "-", siswa.nilai, "- Lulus");
  } else{
//    console.log(siswa.nama, "-", siswa.nilai, "- Remedial");
  }
});
const hargaaselilohya =[
    {name:"mouse", harga :100000},
    {name:"keyboard", harga :150000},
    {name:"headset", harga :200000},
    {name:"flashdisk", harga :50000},
    {name:"Webacam", harga :250000}
];
const  hargadiskon= hargaaselilohya.map((namaDoang) => namaDoang.harga * 0.9);
const hargadiskon2 = hargaaselilohya.map((namaDoang) => namaDoang.name );
console.log(hargadiskon2, "-", hargadiskon);

const calonanggota = [{nama:"Andi", nilai:85, kehadiran:90},
                        {nama:"Budi", nilai:75, kehadiran:95},
                        {nama:"Citra", nilai:90, kehadiran:85},
                        {nama:"Dina", nilai:80, kehadiran:70},
                        {nama:"Eko", nilai:88, kehadiran:100},   
                        {nama:"fajar", nilai:70, kehadiran:75}
];
const lolos = calonanggota.filter((anggota) => {
    return anggota.nilai >= 80 && anggota.kehadiran >= 80;
});
lolos.forEach((anggota) => {
  //  console.log(anggota.nama);
});
//console.log("Jumlah anggota yang lolos: " + lolos.length);

const inventaris = [
    { kode : "PC001", nama: "Komputer 1", kondisi: "Baik" },
    { kode : "PC002", nama: "komputer 2", kondisi: "Rusak" },
    { kode : "PC003", nama: "komputer 3", kondisi: "Baik" },
    { kode : "PC004", nama: "komputer 4", kondisi: "Perbaikan" },
    { kode : "PC005", nama: "komputer 5", kondisi: "Baik" }
];
const filteringinventaris = inventaris.filter((item) => item.kondisi === "Baik");
console.log("Daftar inventaris yang kondisinya baik:");
filteringinventaris.forEach((item) => {
    console.log(`Kode: ${item.kode}, Nama: ${item.nama}`);
});
const findinginventaris = inventaris.find((item) => item.kode === "PC003");
if (findinginventaris){
        console.log(`Nama perangkat: ${findinginventaris.nama}`);
        console.log(`Kondisi: ${findinginventaris.kondisi}`);
    } else {
        console.log("Perangkat tidak di temukan")
    };

