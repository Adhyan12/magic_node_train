const express = require('express')
const app = express()

const port =3000

app.use(express.urlencoded({extended: false}))

app.get('/', (req,res)=>{
    res.send(`
    <h1> What color is the sky on clear day</h1>
    <form action="/result" method ="POST">
    <input type="text" name="color">
    <button>Submit Answer</Button>
    </form>
    `)
})
app.get('/about', (req,res)=>{
    res.send('Thanks for learning more about us')
})

app.post('/result',(req,res)=>{
    if(req.body.color==='blue'){
        res.send('Congrats! that is correct')
    } else{
        res.send("Incorrect! please try again")
    }
})

app.get('/result',(req,res)=>{
    res.send('Why are you visiting this URL?')
})





app.listen(port)
console.log('the server is running at port 3000..')