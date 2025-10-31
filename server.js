//Create HTTP SERVER
import exp from 'express'
import {userRoute} from './apis/userApi.js'
import { productRoute } from './apis/productApi.js'
const app=exp()
//assign port number
const port=8080
app.listen(port,()=>console.log(`server listening on port${port}`))

//add body parser middleware
app.use(exp.json())


//forward req to a specific API
//if path starts with /user-api, forward req to userApi
app.use('/user-api',userRoute)
app.use("/product-api",productRoute)


