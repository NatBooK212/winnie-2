const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{
    
        try {
    message.channel.send("Ok, à tout à l'heure.")
    .then(msg => msg.delete({timeout: 8000}))
    .then(message => bot.destroy())
    .then(() => bot.login(process.env.TOKEN));
          
        } catch (e) {
          console.log(e);
        }
      }
    
    
    


module.exports.help = {
    name:"reboot"
};