const Discord = require("discord.js");


module.exports.run = async (bot, message, args) =>{
  message.delete()
  try {
    var messageArray = message.content.split(", ").slice(1);
      
// Définition des variables permettants le Embed
          const question = new Discord.MessageEmbed()
          .setTitle("Sondage: *** " + (messageArray[0]) + " ***")
          .setColor("#FF00FF");
          const rep1 = new Discord.MessageEmbed()
          .setTitle(messageArray[1])
          .setColor("#FFFF33");
          const rep2 = new Discord.MessageEmbed()
          .setTitle(messageArray[2])
          .setColor("#FFFF33");
          const rep3 = new Discord.MessageEmbed()
          .setTitle(messageArray[3])
          .setColor("#FFFF33");
          const rep4 = new Discord.MessageEmbed()
          .setTitle(messageArray[4])
          .setColor("#FFFF33");
          const reponse = new Discord.MessageEmbed()
          .setTitle(messageArray[0])
          .setColor("#33FF33")
          .addField("Réponse :", "moyenne des reaction");

    if(messageArray[5]){
      message.channel.send("Les sondages sont limités à 4 réponses !") 
    return 
    }
    
    if(messageArray[4]){ 
      const  reaction0 = await message.channel.send(question)
      const  reaction1 = await message.channel.send(rep1)
      await reaction1.react("✅");
      const  reaction2 = await message.channel.send(rep2)
      await reaction2.react("✅");
      const  reaction3 = await message.channel.send(rep3)
      await reaction3.react("✅");
      const  reaction4 = await message.channel.send(rep4)
      await reaction4.react("✅");
      return
    }  
    
    if(messageArray[3]){
      const  reaction0 = await message.channel.send(question)
      const  reaction1 = await message.channel.send(rep1)
      await reaction1.react("✅");
      const  reaction2 = await message.channel.send(rep2)
      await reaction2.react("✅");
      const  reaction3 = await message.channel.send(rep3)
      await reaction3.react("✅");
      return
    }
    
    if(messageArray[2]){
      const  reaction0 = await message.channel.send(question)
      const  reaction1 = await message.channel.send(rep1)
      await reaction1.react("✅");
      const  reaction2 = await message.channel.send(rep2)
      await reaction2.react("✅");
      return
    }
    
    if(messageArray[1]){
      const  reaction0 = await message.channel.send(question)
      const  reaction1 = await message.channel.send(rep1)
      await reaction1.react("✅");
      message.channel.send("L'auteur du sondage ne vous laisse pas beaucoup de choix !!")
      return
    }
    
    if(messageArray[0]){
      const  reaction0 = await message.channel.send(question)
      await reaction0.react("✅");
      await reaction0.react("❌");
    }

    

      
    } catch (error) {
      console.log(error);
    }
 
}


module.exports.help = {
  name:"sondage"
}    
   // Collecteurs

      // const filter = reaction => reaction.emoji.name === "✅";
      // const collector = pollTitle.createReactionCollector(filter, {
      //    time: 15000
      //  });
      // collector.on("collect", r => console.log(`${r.emoji.name}`));
      // collector.on("end", collected => console.log(`Le bot a collecté ${collected.size} ✅.`));

      // const filter1 = reaction => reaction.emoji.name === "❌";
      // const collector1 = pollTitle.createReactionCollector(filter1, {
      //   time: 15000
      // });
      // collector1.on("collect", r => console.log(`${r.emoji.name}`));
      // collector1.on("end", collected => console.log(`Le bot a collecté ${collected.size} ❌.`));
 // const filter = reaction => reaction.emoji.name === "✅";
      // const collector1 = reaction1.createReactionCollector(filter, {
      //    time: 15000
      //  });
      // collector1.on("collect", r => console.log(`${r.emoji.name}`));
      // collector1.on("end", collected1 => console.log(`Le bot a collecté ${collected1.size} ✅.`));
      
      // const collector2 = reaction2.createReactionCollector(filter, {
      //     time: 15000
      //  });
      // collector2.on("collect", r => console.log(`${r.emoji.name}`));
      // collector2.on("end", collected2 => console.log(`Le bot a collecté ${collected2.size} ✅.`));
      
      // const collector3 = reaction3.createReactionCollector(filter, {
      //   time: 15000
      //  });
      // collector3.on("collect", r => console.log(`${r.emoji.name}`));
      // collector3.on("end", collected3 => console.log(`Le bot a collecté ${collected3.size} ✅.`));
      
      // const collector4 = reaction4.createReactionCollector(filter, {
      //   time: 15000
      //  });
      // collector4.on("collect", r => console.log(`${r.emoji.name}`));
      // collector4.on("end", collected4 => console.log(`Le bot a collecté ${collected4.size} ✅.`));

      // if(collected1 >= collected2 >= collected3 >= collected4) mes