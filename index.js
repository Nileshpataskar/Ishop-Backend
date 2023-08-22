const express = require("express");
const connection = require("./mongoose_db");
const cors=require("cors");
const { route_ishop } = require("./routes_folder/route_ishop");
const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json())


app.use('/',route_ishop)


app.listen(2001,async()=>{
    try{
        await connection()
        console.log("listening on 2001")

        

    }
    catch(err){
        console.log("Error listening",err)
    }
});