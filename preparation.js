const zizwa = [
    {nama: "Andi", umur: 17},
    {nama: "Budi", umur: 17},
    {nama: "Citra", umur: 19},
];
console.log(zizwa[0].nama, zizwa[2].umur);

const hargaaselilohya =[
    {kode: "kb-001", nama: "keyboard mechanical", harga:450000},
    {kode: "ms-001", nama: "mouse wireless", harga:250000},
    {kode: "lp-001", nama: "laptop gaming", harga:350000}
];
const hargadiskon = hargaaselilohya.map((barang) => barang.harga * 0.1);
const barang1 = hargadiskon[1];
const beli = 7;
if (beli >= 5) {
    const totalSetelahDiskon = (hargaaselilohya[1].harga - barang1) * beli;
    console.log(totalSetelahDiskon);
}

const daftarsiwa = [{
    nama: "Andi",
    kelas: "XI SIJA",
    nilai: 85,
    kehadiran: 90
},
{
    nama: "Budi",
    kelas: "XI SIJA",
    nilai : 65,
    kehadiran: 90
},
{
    nama: "Citra",
    kelas: "XI SIJA",
    nilai : 92,
    kehadiran: 95
}, 
{
    nama: "Ande",
    kelas: "XI SIJA",
    nilai : 100,
    kehadiran: 100
}
];
daftarsiwa.forEach((siswa) => {
    if (siswa.nilai > 75 && siswa.kehadiran > 80) {
        console.log(`Nama: ${siswa.nama},`);
    }
});

const barangToko = [
    {nama: "keyboard",stok: 10},
    {nama: "mouse",stok: 3},
    {nama: "headset",stok: 0},
    {nama: "webcam",stok: 7},
    {nama: "usb hub",stok: 2},
];
for (let i = 0; i < barangToko.length; i++) {
    if (barangToko[i].stok === 0) {
        console.log(barangToko[i].nama, "-", "Stok Kosong");
    } else if (barangToko[i].stok >= 1 && barangToko[i].stok < 5) {
        console.log(barangToko[i].nama, "-", "Stok Sedikit");
    } else {
        console.log(barangToko[i].nama, "-", "Stok Tersedia");
    }
}
for (let i = 0; i <= 10; i++) {
    console.log(i)}
