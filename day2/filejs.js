const fs = require('fs')

// fs.writeFileSync('halo.txt', 'halo!');
// fs.appendFileSync('halo.txt', '\nYa!');

// var x = fs.readFileSync('halo.txt')
// console.log(x.toString())

// var y = fs.readFile('halo.txt', 'utf8', (err,data) =>{
//  console.log(data)})

var bacastream = fs.createReadStream('halo.txt')

bacastream.on('data', (potData) => {
    console.log(" *** POTONGAN DATA MASUK *** ")
    console.log(potData.toString())
})