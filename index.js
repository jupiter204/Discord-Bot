const Discord = require("discord.js");
const client = new Discord.Client({intents: 32767});
const members = require("./members");
//const keepAlive = require("./server.js");

client.on("ready", ()=>{
    console.log(`Logged in as ${client.user.tag}!`);
    members(client);
    
    
})

client.on("message",msg=>{
    if(msg.content==="*ping"){
        msg.reply("Default:"+client.ws.ping+"ms");
    }
})


client.login("OTczMTQ1MDkyOTgwMzc1NTUy.Gt1GWw.XOMoMA278wn8kCrwA3ZPfZKV_WDCIJ_2suDkkI");
