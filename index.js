const Discord = require("discord.js");
const client = new Discord.Client({intents: 32767});
const members = require("./members");

client.on("ready", ()=>{
    console.log(`Logged in as ${client.user.tag}!`);
    members(client);
    
    
})

client.on("message",msg=>{
    if(msg.content==="!ping"){
        msg.reply("Pong! Default:"+client.ws.ping+"ms");
    }
})

client.login("OTczMTQ1MDkyOTgwMzc1NTUy.G0lE1R.pCwS5drTuYX8f0RdXEywtTZW9ZFHLLqnLpV1aU");
