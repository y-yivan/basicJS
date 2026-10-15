//console.log("Nama saya vano")
//console.log("Nama saya vano")
//console.log("Nama saya vano")
//console.log("Nama saya vano")
//console.log("Nama saya vano")

//for (let i = 1; i <= 10; i++) {
   // console.log(i, "*", 1, "=", i * 1);
//}
//let total = 0;
//for (let i = 10; i <= 20; i+=2) {
  //  total = total + i;
//console.log(`i=${i} - > total=${total}`);}
//console.log(`total=${total}`);

//let kelompok = ["fansen", "chandra", "funata", "eryn", "larasati", "angdika", "jasper", "rexx", "putra", "cakra"];
//for (let i = 0; i < kelompok.length; i++) {
//    console.log(`${i + 1}. ${kelompok[i]}`);
//}

//let nilai = [80, 90, 70, 90, 50, 100, 30, 200, 10];
//for (let i = 0; i < nilai.length; i++) {
//    if (nilai[i] >= 90) {
//        console.log("nilainya", `${nilai[i]} - sangat bagus`);
//    } else if (nilai[i] >= 80) {
//        console.log("nilainya", `${nilai[i]} - bagus`);
   // } else {
     //   console.log("nilainya", `${nilai[i]} - cukup`);
    //}
//}

//let nama = ["jasper", "rexx", "putra", "cakra", "wijaya",];
//let nilai = [85, 60, 90, 72, 45];
//for (let i = 0; i < nama.length; i++) 
//    if (nilai[i] <= 70) {
//        console.log(`${nama[i]} - ${nilai[i]} - Tidak Lulus`);
//    } else {
//        console.log(`${nama[i]} - ${nilai[i]} - Lulus`);
   // }

   let angka = [12, 7, 20, 15, 8, 3, 14, 9,];
   for (let i = 0; i < angka.length; i++) 
    if (angka[i] % 2 === 0 && angka[i] >= 10) {
        console.log(`${angka[i]} - genap >= 10`);
   } else if (angka[i] % 2 === 0 && angka[i] < 10) {
        console.log(`${angka[i]} - genap < 10`);
   } else {
        console.log(`${angka[i]} - ganjil < 10`);
   }
