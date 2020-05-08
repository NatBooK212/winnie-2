const Discord = require("discord.js");


module.exports.run = async (bot, message, args) =>{
    if(message.author.id === '694651642297057404' )return;
    if(message.author.id === '688075115342332100' )
    return setTimeout(()=>{ message.reply("Ne me parle pas toi !") }, 1500);
    
    var dm_etat = message.content.toLowerCase().includes("ca va") ||
        message.content.toLowerCase().includes("cv")     ||
        message.content.toLowerCase().includes("cava")     ||
        message.content.toLowerCase().includes("vas-tu") ||
        message.content.toLowerCase().includes("vas tu") ||
        message.content.toLowerCase().includes("ça va");
    var rps_etat = ["£µ¨%$^ù*¤",
        "Ça va et toi ?",
        "Tranquille et toi ?"]
    var dm_etat_faute = message.content.toLowerCase().includes("sa va") || 
        message.content.toLowerCase().includes("ça vas") ||
        message.content.toLowerCase().includes("ca vas") ||
        message.content.toLowerCase().includes("sa vas") ||
        message.content.toLowerCase().includes("va tu")  ||
        message.content.toLowerCase().includes("va-tu");
    var rps_etat_faute = ["£µ¨%$^ù*¤", 
        "Ouïe jeux vé tré bi1 et toit ?",
        "Ça va, mais apprends à écrire s'il te plaît !",
        "Ça allait, jusqu'au moment où tu as fait cette faute !"]
    var avis =  message.content.toLowerCase().includes("est-ce pas") ||
        message.content.toLowerCase().includes("est ce pas")    ||
        message.content.toLowerCase().includes("pas vrai")        ||
        message.content.toLowerCase().includes("qu'en pense")     ||
        message.content.toLowerCase().includes("qu en pense")     ||
        message.content.toLowerCase().includes("qu'en di")        ||
        message.content.toLowerCase().includes("qu en di")        ||
        message.content.toLowerCase().includes("t'en dis")        ||
        message.content.toLowerCase().includes("tu en dis")       ||
        message.content.toLowerCase().includes("t en pense")      ||
        message.content.toLowerCase().includes("t'en pense")      ||
        message.content.toLowerCase().includes("tu en pense")     
    var rep_avis =["*$^*ù*^pk",
        "Désolé "+ message.author.toString() + ", je sais pas trop !",
        "Non je suis pas d'accord !",
        "Mmmmhhh...",
        "Je ne me prononce pas.","" ] 
    var rps_avis_moi = ["jibgfohij",
        "Je suis entièremment d'accord !",
        "Bien sûr !",
        "De toute façon t'as toujours raison chacal :call_me:"]


    if(message.author.id === '537999827682721803' ){
        if(avis) return message.channel
            .send(rps_avis_moi[Math.floor((Math.random() * 3) + 1)])
        if(!args[0]) //bot mention seule
            return message.channel.send("Yep poto");
    }

    if(dm_etat) return message.channel
        .send(rps_etat[Math.floor((Math.random() * 2) + 1)]) &&
        setTimeout(()=>{ message.channel.send("Non, en vrai je m'en fous !") }, 6000);
        
    if(dm_etat_faute) return message.channel
        .send(rps_etat_faute[Math.floor((Math.random() * 3) + 1)]);
    if(avis)return message.channel
        .send(rep_avis[Math.floor((Math.random() * 4) + 1)]);
    if(!args[0])return message.channel.send("QUOI !!") &&
        message.channel.send("Qu'est-ce que tu veux ?");
 
   
    
    
}

module.exports.help = {
    name:"bot"
};
