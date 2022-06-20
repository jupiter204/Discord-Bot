module.exports = client => {
  let channel = client.channels.cache.get('988075822780915748');
  client.on('voiceStateUpdate', async (oldState, newState) => {

    let newUserChannel = newState.channel;
    let oldUserChannel = oldState.channel;
    let guild = oldState.guild;
    let member = guild.members.fetch(oldState.id);
    let channelIn = guild.channels.fetch(newState.channelId);
    let channelOut = guild.channels.fetch(oldState.channelId);

    
    

    if (oldUserChannel === null && newUserChannel !== null) {
      // User Join a voice channel
      
      channel.send((await member).displayName+" join "+(await channelIn).name);
      console.log((await member).displayName+" join "+(await channelIn).name);
      
    } else if (oldUserChannel !== null && newUserChannel === null) {
      // User Leave a voice channel  
      
      channel.send((await member).displayName+" from "+(await channelOut).name+" leave");
      console.log((await member).displayName+" from "+(await channelOut).name+" leave");

    } else if (
      oldUserChannel !== null &&
      newUserChannel !== null &&
      oldUserChannel.id != newUserChannel.id
    ) {
      // User Switch a voice channel
      
      channel.send((await member).displayName+" move to "+(await channelIn).name);
      console.log((await member).displayName+" move to "+(await channelIn).name);
      
    }
  });
}

