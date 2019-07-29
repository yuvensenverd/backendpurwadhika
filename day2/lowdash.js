var map = (arr, fn) => {
    var newarr = []
    for(var i = 0; i<arr.length; i++){
        newarr.push(fn(arr[i]))
    }
    return newarr
}

var first = (arr) => {
 
    return arr[0]
}

module.exports = {  first,  map}