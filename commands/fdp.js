const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    message.channel.send("ATTENTION : "+ message.author.username + ", ne parle comme ça voyons !!! ") 
    
    console.log("   fdp fonctionne")
}

module.exports.help = {
    name:"fdp"
}