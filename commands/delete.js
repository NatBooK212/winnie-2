const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Il me faut la permision pour supprimer les messages")
    if (!args[0]) return message.channel.send("Il faut spécifier le nombre de message à supprimer")

    if (args[0] > 99) return message.channel.send("Il y a trop de messages à supprimer")

    message.channel.bulkDelete(args[0]).then(() => {
        message.channel
        .send("**" + args[0] + "** messages supprimés")
        .then(msg => msg.delete({timeout: 6000}))
    })

};

module.exports.help = {
    name:"delete"
};