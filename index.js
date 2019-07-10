const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect('mongodb://root:password@mongo:27017/mongoose', {useNewUrlParser: true});

const Charge = mongoose.model('charge', new Schema({ 
    r: {
        type: String,
        required: true,
        maxlength: 50
    },
    n: {
        type: String,
        unique:true
    },
    pr: {
        type: Number
    },
    da: {
        type: Date,
        default: Date.now 
    },
    e: {
        type: Number
    },
    price: {
        type: String,
        maxlength: 50
    },
    sc: {
        type: String,
        maxlength: 50
    },
    t: {
        type: String,
        maxlength: 50
    },
    text: {
        type: String,
        maxlength: 50
    },
    vars: {
        type: String,
        maxlength: 50
    }
}));

app.get("/mongo-client/:count",async (req,res)=>{
    res.send("hi "+req.params.count);
});

app.get("/mongoose/insert",async (req,res)=>{
    res.send("okey");
    // let counter = 0;
    // let endString = 0;
    
    // const now = Math.floor(Date.now() / 1000);
    // for(i=0;i<req.params.count;i++){
    const charge = new Charge({
        r: "0",
        n:"09120975633",
        pr: 9,
        e: 1,
        price:"3000",
        sc:null,
        t:"05:22:01",
        text:"",
        vars:""
    });
    await charge.save();
    //     if ((counter % 500) == 0) {
    //         let ends = Math.floor(Date.now()/1000) - now;
    //         endString = `end in ${counter} number = ${ends} second`;
    //     }
    //     console.log(endString);
    // }

    console.log("done");
});

app.get("/mongoose/update",async (req,res)=>{
    res.send("okey");
    // let counter = 0;
    // let endString = 0;

    const result = await Course.update({},{
        $set:{
            r: "0",
            n:"09120975633",
            pr: 9,
            e: 1,
            price:"3000",
            sc:null,
            t:"05:22:01",
            text:"",
            vars:""
        }
    }); 
    await charge.save();
    // let ends = Math.floor(Date.now()/1000) - now;
    // endString = `end in ${counter} number = ${ends} second`;

    // console.log(endString);

    console.log("done");
});

app.get("/mongoose/updateOne",async (req,res)=>{
    res.send("okey");
    // for(i=0;i<req.params.count;i++){
    const result = await Course.updateOne({},{
        $set:{
            r: "0",
            n:"09120975633",
            pr: 9,
            e: 1,
            price:"3000",
            sc:null,
            t:"05:22:01",
            text:"",
            vars:""
        }
    }); 
    //     if ((counter % 500) == 0) {
    //         let ends = Math.floor(Date.now()/1000) - now;
    //         endString = `end in ${counter} number = ${ends} second`;
    //     }
    //     console.log(endString);
    // }

    console.log("done");
});

// app.get("/mongoose/delete/:count",async (req,res)=>{
    
    
//     const charge = await Charge
//         .find({ author: "Mosh", isPublished: true })
//         .limit(10)
//         .sort({ name: 1 })
//         .select({ name: 1 , tags: 1 });

// });

app.get("/mongoose/select",async (req,res)=>{

    res.send("okey"); 
    
    // for(i=0;i<req.params.count;i++){
    const charge = await Charge
        .find({ author: "Mosh", isPublished: true });
    console.log(charge);
    // }
         
    console.log("done");
});

app.listen(process.env.PORT,()=>{
    console.log("app is running in "+ process.env.PORT);
});