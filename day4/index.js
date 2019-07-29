var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = 1998
var arr = [{
    id : 1,
    nama : 'abcd',
    harga : 100000,
    description : "aosjdusfyuahsdnfyausdfn"
},
{
    id : 2,
    nama : 'bd',
    harga : 500000,
    description : "aosjdusdssfyuahsdnfyausdfn"
},
{
    id : 3,
    nama : 'gsjdijds',
    harga : 400000,
    description : "aosjdusfasdfayuahsdnfyausdfn"
},
    ]

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req,res)=>{  // '/' adalah URL, Route ( Parameter Pertama )
    res.json({"nama":"Andi"}); // bisa juga send , tapi send lebih general (adaptive)
})

app.get('/home', (req,res) => { 
    res.send({test : "123"})
})

app.get('/products/:id', (req,res) => {
    console.log(req.params.id) // KALAU PAKAI products/ 
  
    
        res.send(arr.filter((val)=> val.id == req.params.id)[0])
})

app.get('/products', (req,res) => {
    console.log(req.query)
    // console.log(Object.keys(req.query).length)
    var array = arr

    // if(req.query.nama && req.query.hargaMin && req.query.hargaMax){
    //     console.log("Masuk")
    //     res.send(array)
    // }

    if(req.query.nama){
        console.log("masuk")
      
        array = array.filter((res)=> { 
            console.log(res.nama.toLowerCase())
            console.log(req.query.nama.toLowerCase())
            return res.nama.toLowerCase().includes(req.query.nama.toLowerCase())
        })
     
    }

    if(req.query.hargaMin){
        req.query.hargaMin = parseInt(req.query.hargaMin)
        array = array.filter((res)=> { 
           
            return res.harga >= req.query.hargaMin
        })
        
    }

    if(req.query.hargaMax){
        req.query.hargaMax = parseInt(req.query.hargaMax)
        array = array.filter((res)=> { 
            return res.harga <= req.query.hargaMax
        })
    }

    
    
    res.send(array)
})

app.get('/test', (req,res) => {
    try{
        console.log("masuk test")
        res.status(202).send("Request Berhasil")
    } catch(err){
        console.log(err.message)
        res.status(505).send(err.message)
    }
    
})

app.post('/addproduct', (req,res) => {
    console.log(req.body)
    arr.push(req.body)
    res.status(201).send({message : 'Add Product Success!', newData : arr})
})

app.listen(port, ()=> console.log(` Api aktif di port  ${port} `))

