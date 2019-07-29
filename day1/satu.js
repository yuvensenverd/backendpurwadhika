var data = require('./index.js');
console.log(data)
console.log(data.nama); 
console.log(data.usia);
var test = 'nama'
console.log(data['nama']) // nama dapat ditampung dalam variable, agr user bisa memilih mau lihat yang mana
console.log(data[test])