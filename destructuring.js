const siswa = {
    nama: "reihan",
    umur: 10,
    kelas: 7,
    hobby: "catur"
};
//const {nama, umur, kelas} = siswa;
//delete siswa.kelas;
//console.log(siswa);  
const {nama: name, umur: age,kelas: kelaz} = siswa;
//console.log(name, age, kelaz);

const warna = ["merah", "biru", "hijau", "kuning"];
const [warna1, warna2, warna3, warna4] = warna;
//console.log(warna1);

const dafratharga = [
    {nama: "Asus", Harga: 14000000, kondisi: "baru"},
    {nama: "Lenovo", Harga: 12000000, kondisi: "bekas"},
    {nama: "MSi", Harga: 15000000, kondisi: "baru"},
   
];

const siswabaru2 = dafratharga.map (({nama, Harga, kondisi}) => {
   return {nama, Harga, }
});
console.log(siswabaru2);