const mongoose = require ('mongoose')
const Db_liveurl = 'mongodb+srv://kanchangangil08:Kanchan123@cluster0.vpzc3sd.mongodb.net/grevianceportal?retryWrites=true&w=majority'
const local_url = 'mongodb://127.0.0.1:27017/grevianceportal'

const connectDb =()=>{
    return mongoose.connect(Db_liveurl)
    .then(()=>{
        console.log('connection successfully')
    }).catch((error)=>{
        console.log(error)
    })
}
module.exports= connectDb