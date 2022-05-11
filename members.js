module.exports = client => {
  let channel = client.channels.cache.get('973133860026060824');
  client.on('voiceStateUpdate', async (oldState, newState) => {

    let newUserChannel = newState.channel;
    let oldUserChannel = oldState.channel;
    let guild = oldState.guild;
    let member = guild.members.fetch(oldState.id);
    let channelIn = guild.channels.fetch(newState.channelId);
    let channelOut = guild.channels.fetch(oldState.channelId);

    
    

    if (oldUserChannel === null && newUserChannel !== null) {
      // User Join a voice channel
      console.log((await member).displayName+" 加入 "+(await channelIn).name);
      channel.send((await member).displayName+" 加入 "+(await channelIn).name);
      
      // Handle your save when user join in memcache, database , ...
    } else if (oldUserChannel !== null && newUserChannel === null) {
      // User Leave a voice channel
      console.log((await member).displayName+" 從 "+(await channelOut).name+" 退出");
      channel.send((await member).displayName+" 從 "+(await channelOut).name+" 退出");
      // Calculate with previous save time to get in voice time
    } else if (
      oldUserChannel !== null &&
      newUserChannel !== null &&
      oldUserChannel.id != newUserChannel.id
    ) {
      // User Switch a voice channel
      console.log((await member).displayName+" 移動到 "+(await channelIn).name);
      channel.send((await member).displayName+" 移動到 "+(await channelIn).name);
      // This is bonus if you want to do something futhermore
    }
  });
}

