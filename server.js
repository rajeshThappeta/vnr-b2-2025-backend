//Create HTTP SERVER
import exp from 'express'
const app=exp()
//assign port number
const port=8080
app.listen(port,()=>console.log(`server listening on port${port}`))

//CREATE  user API
    //route to handle GET req
    app.get('/users',(req,res)=>{
        //send res to client
        res.json({message:"all user data"})
    })

    //route to handle POST req
    app.post('/user',(req,res)=>{
        res.json({message:"User created"})
    })


    //route to handle PUT req
    app.put('/user',(req,res)=>{
        res.json({message:"User modified"})
    })

    //route to handle DELETE req
    app.delete('/user',(req,res)=>{
        res.json({message:"User deleted"})
    })