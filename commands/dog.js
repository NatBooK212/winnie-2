const Discord = require("discord.js");
const superagent = require("superagent")

module.exports.run = async (bot, message, args) =>{
    let { body } = await superagent.get('https://random.dog/woof.json')
    let dogEmbed = new Discord.MessageEmbed()
    .setColor("#33FF33")
    .setTitle('Voici un chien :dog: ')
    .setImage(body.url);

message.channel.send(dogEmbed)
}

module.exports.help = {
    name:"dog"
};
