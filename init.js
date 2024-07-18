const mongoose = require('mongoose');
const Chat=require("./models/chat.js");

main().then(()=>{
    console.log("Connection Succesfully");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatshapp')
};

let allChats=[
    {
    from:"neha",
    to:"priya",
    msg:"Send me a copy",
    created_at:new Date()
   },
   {
    from:"rohit",
    to:"mohit",
    msg:"Send me a book",
    created_at:new Date()
   },
   {
    from:"princess",
    to:"queen",
    msg:"love you",
    created_at:new Date()
   },
   {
    from:"naira",
    to:"kartik",
    msg:"medhak khi ka",
    created_at:new Date()
   },

]
Chat.insertMany(allChats);