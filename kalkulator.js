const operations = require('./operasi')
const readline   = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log(`
  Belajar TDD-Testing NodeJS + Mocha Framework

  Selamat datang di Node.js Kalkulator app
  Versi: 1.0.0.

  Penggunaan: User akan memasukan dua buah angka, 
  berikutnya akan diminta untuk memilih operasi yg diinginkan.
`)

rl.question('Masukan angka pertama: ', (x) => {
  rl.question('Masukan angka kedua: ', (y) => {
    rl.question(`
      Silahkan pilih operasi dibawah ini:
      [1] Penjumlahan (+)
      [2] Pengurangan (-)
      [3] Perkalian (*)
      [4] Pembagian (/)

      Masukan Pilihan anda : `, (pilihan) => {
        if(!operations.validateNumbers(x, y)) {
          console.log('Hanya boleh memasukan angka saja!')
        } else {
          switch(pilihan) {
            case '1':
              console.log(`Hasil penjumlahan dari ${x} dan ${y} adalah ${operations.add(x, y)}.`)
              break;
            case '2':
              console.log(`Hasil pengurangan dari ${x} dan ${y} adalah ${operations.subtract(x, y)}.`)
              break;
            case '3':
              console.log(`Hasil perkalian dari ${x} dan ${y} adalah ${operations.multiply(x, y)}.`)
              break;
            case '4':
              console.log(`Hasil pembagian dari ${x} dan ${y} adalah ${operations.divide(x, y)}.`)
              break;
            default:
              console.log('Silahkan restart program dan pilih pilihan 1 sampai 4')
              break;
          }
        }
        rl.close()
      })
  })
})