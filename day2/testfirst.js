const _ = require('./lowdash')

var x = [1,2,3]
var y = [4,5,6]
var z = [7,8,9]

var arr = [x,y,z]

var hasil = _.map(arr,_.first)
console.log(hasil)

