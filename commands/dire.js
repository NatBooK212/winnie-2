const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    message.delete();
    const text = args.join(" ");
    
    if(args[0] === '$'){return message.guild.channels.cache
            .get('696107588407787561')  
            .send(text.slice(1))
        
    }else{message.channel.send(text)}
    
}
// if(message.author.id === '537999827682721803'){ // nathan //
module.exports.help = {
    name:"dire"
}