const Discord = require("discord.js");
const exp = require("../exp.json");

module.exports.run = async (bot, message, args) =>{
    message.delete();

    if(message.mentions.members.first()){
        if(!exp[message.mentions.members.first().id]){
        exp[message.mentions.members.first().id] ={
            xp : 0,
            pTotal : 0,
            multi : 0,
            niveau : 1,
            envoi : 0
        };
        }
    
        var mention = message.mentions.members.first()
        var cExp1 = exp[mention.id].xp;
        var cExpTotal1 = exp[mention.id].pTotal;
        var cNiv1 = exp[mention.id].niveau;
        var nextLevelUp1 = 100 + exp[mention.id].multi * 50;
        var expNeededForLevelUp1 = nextLevelUp1 - cExp1;
        var nivEmbed1 = new Discord.MessageEmbed()
            .setAuthor(mention.displayName)
            .setColor("#33FF33")
            .addField('Niveau', cNiv1, true)
            .addField('XP', cExpTotal1, true)
            .addField('Messages envoyés', exp[mention.id].envoi, true)
            .setFooter(`   ${expNeededForLevelUp1} points requis pour passer au prochain niveau.`);
    
        return message.channel
            .send(nivEmbed1)
            .then(msg => msg.delete({timeout: 45000}));
    }    
    if(!exp[message.author.id]){
        exp[message.author.id] ={
            xp : 0,
            pTotal : 0,
            multi : 0,
            niveau : 1,
            envoi : 0
        };
    }
    
    let cExp = exp[message.author.id].xp;
    let cExpTotal = exp[message.author.id].pTotal;
    let cNiv = exp[message.author.id].niveau;
    let nextLevelUp = 100 + exp[message.author.id].multi * 50;
    let expNeededForLevelUp = nextLevelUp - cExp;
    let nivEmbed = new Discord.MessageEmbed() 
        .setAuthor(message.author.username, message.author.diplayAvatarURL)
        .setColor("#33FF33")
        .addField('Niveau', cNiv, true)
        .addField('XP', cExpTotal, true)
        .addField('Messages envoyés', exp[message.author.id].envoi, true)
        .setFooter(`   ${expNeededForLevelUp} points requis pour passer au prochain niveau.`)
        ;
    if(args[0])return 
    message.channel
        .send(nivEmbed)
        .then(msg => msg.delete({timeout: 45000}));
           

}
module.exports.help = {
    name:"lvl"
}