const {sum, kali, kaliBanyak, bagi} = require("./funxi");
const {kurang} = require("./pengurangan")

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Pls insert first number ', (number1) => {
    rl.question('Pls insert second number ', (number2) =>{
        const hasilPenjumlahan = sum (parseInt (number1),parseInt (number2));
        const hasilPengurangan =  kurang (parseInt (number1),parseInt (number2));
        const hasilPerkalian = kali (parseInt (number1),parseInt (number2));
        const hasilKaliBanyak =  kaliBanyak (parseInt (number1),parseInt (number2));
        const hasilBagi =  bagi (parseInt (number1),parseInt (number2));

        console.log('angka yang anda masukkan adalah ' + number1 + ' dan ' + number2)
        console.log('hasil dari penjumlahan nya adalah ' + hasilPenjumlahan);
        console.log('hasil dari pengurangan nya adalah ' + hasilPengurangan);
        console.log('hasil dari perkalian nya adalah ' + hasilPerkalian);
        console.log('hasil dari kali banyak nya adalah ' + hasilKaliBanyak);
        console.log('hasil bagi nya adalah ' + hasilBagi);
        rl.close();
    })
});