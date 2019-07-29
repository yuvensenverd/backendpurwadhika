var test = require('./mytimers')

test.hitungDetikTimeout(()=>{
    console.log("Timeout")}, 1)

test.hitungInterval(()=>{
        console.log("Interval")}, 1)