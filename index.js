const Discord = require("discord.js");
const fs = require("fs");
// const config = require("./storage/config.json");
const exp = require("./exp.json");
const bot = new Discord.Client();
var prefix = "!";

bot.commands = new Discord.Collection();
 
fs.readdir("./commands/", (err, files) =>{
    if(err) console.log(err);
 
    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    if(jsFiles.length <= 0){
        console.log("Aucun fichier de commande !")
        return;
    }
    jsFiles.forEach((f,i) =>{
        var fileGet = require("./commands/" + f);
        console.log("Fichier de commande " + f + " récupéré avec succès !")
        bot.commands.set(fileGet.help.name, fileGet)
    });
});
 
bot.on("ready", async () =>{
    console.log(" ")
    console.log("Connecté en tant que : " + bot.user.tag)
    bot.user.setActivity("la Belote ( tout seul )", {type: "PLAYING"});
});

bot.on("message", message =>{
    if(message.channel.type === "dm") return;
    if(!message.guild) return;
    
    // Systeme d'xp
let nombre = Math.floor(Math.random() * 5)+1; 
let addExp = nombre ;
if(!exp[message.author.id]){
        exp[message.author.id] = {
            pTotal : 0,
            xp : 0,
            multi : 0,
            niveau : 1,
            envoi : 0
        };
}

let currentExp = exp[message.author.id].xp;
let currentNiv = exp[message.author.id].niveau;
let nextLevel = 100 + exp[message.author.id].multi * 50 ;
exp[message.author.id].xp = currentExp + addExp;
exp[message.author.id].pTotal = exp[message.author.id].pTotal + addExp;
exp[message.author.id].envoi = exp[message.author.id].envoi + 1

if(currentExp+nombre >= nextLevel){
    exp[message.author.id].niveau += 1;
    exp[message.author.id].multi += 1 ;
    exp[message.author.id].xp = 0;
    
    message.channel
        .send(`Bravo **${message.author.username}**, tu viens de passer niveau **${currentNiv + 1}**`)
        .then(msg => msg.delete({timeout: 5000}));
}
fs.writeFile('./exp.json', JSON.stringify(exp), err =>{
    if(err) console.log(err);
});

// determination de variables pour commandes à config.prefix    
    
    var messageArray = message.content.split(/ +/g);
    var command = messageArray[0];
    var args = messageArray.slice(1)
    
    // bot mention
    var bot_mention = message.mentions.users.has('694651642297057404');
    if(bot_mention) bot.commands.get("bot").run(bot, message, args);


    if(message.author.bot) return;

    var musique = message.content.toLowerCase().includes("!play") ||
                message.content.toLowerCase().includes("!skip") ||
                message.content.toLowerCase().includes("!pause") ||
                message.content.toLowerCase().includes("!resume") ||
                message.content.toLowerCase().includes("!liste") ||
                message.content.toLowerCase().includes("!vol") ||
                message.content.toLowerCase().includes ("!stop");
    if(musique) return bot.commands.get("musique").run(bot, message, args);
    
    var commands = bot.commands.get(command.slice(prefix.length))
    if(commands) return commands.run(bot, message, args);
     // pour éviter d'avoir plusieurs fdp
    
// commandes sans config.prefix
        // pour hello avec les mot "helo" "hell "
    var hello = message.content.toLowerCase().includes("helo") ||
                message.content.toLowerCase().includes ("hell ");
    if(hello) bot.commands.get("hello").run(bot, message, args);

        //fdp
    var fdp = message.content.toLowerCase().includes("fdp") || 
              message.content.toLowerCase().includes("fils de pute");
    if(fdp) bot.commands.get("fdp").run(bot, message, args);

        // blague
    var blague = message.content.toLowerCase().includes("blague") ||
                 message.content.toLowerCase().includes("boutades");
    if(blague) bot.commands.get("blague").run(bot, message, args);

 });

bot.login('Njk0NjUxNjQyMjk3MDU3NDA0.XrWdMA.voWEdAVj53JYAuvYLYZufihdUUc');


// var lol = [" ", "ca va","lol"]
    // if(message.content.includes(lol()))message.reply(lol[Math.floor((Math.random() * 2) + 1)])

    // var fo = Math.floor((Math.random() * 2) + 1)
    // console.log(fo

//     async () =>{  
//     try {
//       const embed = new Discord.RichEmbed()
//         .setTitle(args.join(" "))
//         .setColor("#7289DA");
//       console.log(embed)
//       const pollTitle = await message.channel.send({ embed });
//       await pollTitle.react("✅");
//       await pollTitle.react("❌");
     
//     }
//     catch (error) {
//             console.log(error);
//     } 
//     }
// // console.log(message.embeds)    
// // var user = message.mentions.users.first();
// console.log(embed)
 // personnalisation des messages avec des prénoms
  
    // if (message.author.username === 'nathan') {
        //var user = 'Nat';
    // }
    // if (message.author.username === 'bot test') {
        // user = 'bt';
    // }     npm init --yes