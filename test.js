const operations = require('./operasi')
const assert = require('assert')

it('menghitung dengan benar penjumlahan dari 1 dan 3', () => {
  assert.equal(operations.add(1, 3), 4)
})

it('menghitung dengan benar hasil penjumlahan dari -1 dan -1', () => {
  assert.equal(operations.add(-1, -1), -2)
})

it('menghitung dengan benar hasil pengurangan dari 33 dan 3', () => {
  assert.equal(operations.subtract(33, 3), 30)
})

it('menghitung dengan benar hasil perkalian dari 10 dan 10', () => {
  assert.equal(operations.multiply(10, 10), 100)
})

it('menghitung dengan benar hasil pembagian dari 10 dan 2', () => {
  assert.equal(operations.divide(10, 2), 5)
})

// menambahkan validasi 
it('Mengindikasikan kesalahan ketika salah satu inputan yg dimasukan bukan angka', () => {
  assert.equal(operations.validateNumbers('fulana', 5), false)
})

it('Mengindikasikan kesalahan ketika dua inputan yg dimasukan bukan angka', () => {
  assert.equal(operations.validateNumbers('fulana', 'fulana'), false)
})

it('Sukses ketika yg dimasukan dua-dua nya adalah sebuah angka', () => {
  assert.equal(operations.validateNumbers(5, 5), true)
})