const express = require("express");
const app = express();

app.get('/',(req,res) => {
    res.json({
        message:"krishna"

    });
});

app.listen(3000, () =>{
    console.log("server is running on port 3000");
});