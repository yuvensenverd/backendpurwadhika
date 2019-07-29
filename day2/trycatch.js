var chalk = require('chalk')
chalk.red('Merah')

var coba = () =>{
    try{
        console.log(kari)
    }catch(err){
        throw err // Coba di komen
    }
}


try{

    console.log("asdasdasd")
    coba()
    console.log("jalan dlu")
    
}catch(err){
    console.log("gak jalan")
}

