function test(){
    var a = {"1" : 3}
    return a["1"]
}
console.log(test())


var max = (arr, fn) => {
    var nilaiMax = arr[0]
    if(!fn){
        for(var i = 1; i< arr.length; i++){
            if(nilaiMax <arr[i]){
                nilaiMax = arr[i]
            }
        }
        return nilaiMax
    }else{
        for(var i = 1; i<arr.length; i++){
            if(fn(nilaiMax) < fn(arr[i])){
                nilaiMax = arr[i]
            }
        }
        return fn(nilaiMax)
    }

}

console.log(max([{"a":8}, {"a":30}, {"a":2}], (x)=> x.a))