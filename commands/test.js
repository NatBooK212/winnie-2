const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    message.channel.send("Bonr "+ message.author.toString() + "!")
    console.log("   !test fonctionne")
}

module.exports.help = {
    name:"hell"
}