//create mini-express(Seperate route) app
import exp from 'express'
export const userRoute=exp.Router()

//Test data
    let users=[]

//CREATE  user API
    //route to handle GET req
    userRoute.get('/users',(req,res)=>{
       //get users and send res
       res.json({message:"all users",payload:users})

    })

    //route to send a user by id
    userRoute.get("/users/:id",(req,res)=>{
        //read id from url parameter
        let userId=Number(req.params.id) // { id : "100"}
        //find user by id
        let user= users.find(userObj=>userObj.id===userId)
        //if user not found
        if(user===undefined){
            res.json({message:"User not found"})
        }else{
            res.json({message:"user found",payload:user})
        }

    })

    //route to handle POST req
    userRoute.post('/user',(req,res)=>{
       
        //get new user from req
        let newUser=req.body
        //push newUser to users
        users.push(newUser)
        //send res
        res.json({message:"User created"})
    })


    //route to handle PUT req
    userRoute.put('/user',(req,res)=>{
        //get modified user from client
        let modifiedUser=req.body
        //find user index with id of modifiedUser
        let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
        //if user not found
        if(index==-1){
            res.json({message:"User not found to update"})
        }else{
            users.splice(index,1,modifiedUser)
            res.json({messahe:"User modified"})
        }
       
    })

    //route to handle DELETE req
    userRoute.delete('/user/:id',(req,res)=>{
        
         //read id from url parameter
        let userId=Number(req.params.id)
    })