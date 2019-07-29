// var jam = require('timers')


// jam.setTimeout(() => {
//     console.log('hello')
// }, 1000 )

// for(var i = 0; i<=500000000; i++){
//     if(i==500000000){
//         console.log("hello")
//     }
// }

hitungDetikTimeout = (fn, detik=1) => {
    for(var i = 0 ; i<=500000000*detik; i++){
        if(i==500000000*detik){
            fn()
        }
    }
}

hitungInterval = (fn, detik) => {
    // var interval = true
    // var i = 0
    // while(interval){
    //     var second = 300000000*detik
    //     if(i % second == 0 && (i!=0)){
    //         fn()
    //     }
    //     i++
    // }
    var interval = true
    while(interval) {
        hitungDetikTimeout(fn, detik)
    }
    // for(var i=0;; i++) >> Infinite Looping
}

module.exports = {
    hitungDetikTimeout, hitungInterval
}




