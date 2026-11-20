const siswa = {
    nama: " aNdI ",
    kelas: "x ict",
    email: "ANDI@GMAIL.COM"
};
const {nama: namaSiswa, kelas: kelasSiswa, email: emailSiswa} = siswa;

console.log(`Nama : ${namaSiswa.trim().toUpperCase()}
Kelas : ${kelasSiswa.trim().toUpperCase()}
Email : ${emailSiswa.trim().toLowerCase()}`);

const xixwa = [
    {nama: "Andi", email: "andi@gmail.com", umur: 17},
    {nama: "Budi", email: "budi@yahoo.com", umur: 17},
    {nama: "Citra", email: "citra@gmail.com", umur: 17},
];
const googleholic = xixwa.filter((user) => (user.email === "andi@gmail.com" || user.email === "citra@gmail.com") && user.email.endsWith("@gmail.com"));
googleholic.forEach((user) => delete user.umur) ;
console.log(googleholic);