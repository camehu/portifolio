const mongoose= require('mongoose')
const dbUser= process.env.DB_USER
const dbPassword = process.env.DB_PASS
//const dbPort = process.env.PORT
//const port = '3006'


const conn = async ()=>{

    try{

        const dbConn = mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.ol9viae.mongodb.net/?retryWrites=true&w=majority`)
        console.log('conectou ao banco')
        return dbConn
    }

    catch(error){
        console.log(error);
    }

}

 exports = conn

