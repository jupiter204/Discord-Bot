const Discord = require("discord.js");
const client = new Discord.Client({intents: 32767});
const members = require("./members");
const keepAlive = require("./server.js");

client.on("ready", ()=>{
    console.log(`Logged in as ${client.user.tag}!`);
    members(client);
    
    
})

client.on("message",msg=>{
    if(msg.content==="*ping"){
        msg.reply("Default:"+client.ws.ping+"ms");
    }
})


client.login("OTczMTQ1MDkyOTgwMzc1NTUy.Ga7sdl.uFX8xOtMCze6ALu5w4pujsi8wO_HAr7EDjla8c");
