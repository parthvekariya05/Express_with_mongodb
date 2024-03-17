const express = require('express');
const mongoose =require('mongoose');
const bodyParser = require("body-parser");
const Faculty = require("./model/Faculty");

mongoose.connect('mongodb+srv://23010101660:parthvekariya5059@parth.enus6nh.mongodb.net/D2D_Database?retryWrites=true&w=majority').then(()=>{
    console.log("Connection Successfulll");
    const app = express();
    
    app.use(bodyParser.urlencoded());
    app.get("/",async(req,res)=>{
        const data=await Faculty.find();
        res.json(data);
    })

    app.get("/:id",async(req,res)=>{
        const data=await Faculty.findOne({id:req.params.id});
        res.json(data);
    })

    app.post( "/" , async ( req, res ) => {
        const data = await Faculty.create(req.body)
        res.send(data);
    });

    app.put("/:id",async(req,res)=>{
        const id = req.params.id;
        const {name}=req.body;
        const data = await Faculty.findOne({id:id});
        data.name= name;
        data.save();
        res.json(data);
    });

    app.delete("/:id",async(req,res)=>{
        const id = req.params.id;
        const data = await Faculty.deleteOne({id : id});
        res.json(data);
    })

    app.listen(3000,()=>{
        console.log("Server is Started ");
    })
}
);