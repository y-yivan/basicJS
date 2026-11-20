const username = "reihan";
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(username.trim());

const email= "reihan@example.com";
console.log(email.includes("@"));
if (email.includes("@")) {
    console.log("email valid");
} else {
    console.log("email tidak valid");
}

const kode = "LT-001";
if (kode.startsWith("LT")) {
    console.log("barangnya komputer");
} else {
    console.log("barangnya bukan komputer");
}

const file = "laporan.jpg";
if (file.endsWith(".jpg")) {
    console.log("file gambar");
}
 else if (file.endsWith(".pdf")) {
    console.log("file pdf");
} else {
    console.log("undefined");
}

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

const numby = 2;
if (numby % 2 == 0) {
    console.log("genap");
} else {
    console.log("ganjil");
}

const namaewa = "Pc-001";
console.log(namaewa.slice(3, 5));

const kalimat = "Saya belajar JavaScript";
const hasil = kalimat.replace ("JavaScript", "NodeJS");
const hasil2 = hasil.replace("Saya", "Aku");

console.log(hasil2);

const materisplit = "Saya belajar JavaScript";
const hasilsplit = materisplit.split(" ");
console.log(hasilsplit);

const materijoin = ["Saya", "belajar", "JavaScript"];
const hasiljoin = materijoin.join(" - ");
console.log(hasiljoin);

const acak = "AsdkiiJIGBGY7rg44";
const A = acak.toLowerCase();
console.log(A);