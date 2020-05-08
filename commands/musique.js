
const Discord = require("discord.js");
const fs = require("fs");
const prefix = "!";
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const queue= new Map();

module.exports.run = async (bot, message, args) =>{
  message.delete()

  const serverQueue = queue.get(message.guild.id);
  const voiceChannel = message.member.voice.channel;

  if (!voiceChannel)
    return message.channel
      .send("Tu dois être connecté à un salon vocal pour faire cette commande !")
      .then(msg => msg.delete({timeout: 8000}));

  const validate = await ytdl.validateURL(args[0]);

  if (message.content.startsWith(`${prefix}play`) && !validate) {
    return message.channel
      .send("Le lien n'a pas été trouvé !")
      .then(msg => msg.delete({timeout: 8000})) ;
  } else if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return ;
  } else if (message.content.startsWith(`${prefix}skip`) && serverQueue) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}stop`) && serverQueue) {
    stop(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}pause`) && serverQueue) {
    pause(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}vol`) && serverQueue) {
    volume(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}liste`) && serverQueue) {
    liste(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}resume`) && serverQueue) {
    resume(message, serverQueue);
    return;
  } else {
    message.channel
      .send("Il n'y a pas de musique en cours !")
      .then(msg => msg.delete({timeout: 8000}));
  }

async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel
      .send("Je n'ai pas la permission pour rejoindre et parler dans ce salon !")
      .then(msg => msg.delete({timeout: 8000}));
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
    title: songInfo.title,
    url: songInfo.video_url
  };

  if (!serverQueue) {
    var queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel
      .send(`🎵 ***${song.title}***  a été ajoutée à la liste d'attente ! `)
      .then(msg => msg.delete({timeout: 8000}));
  }
}

function skip(message, serverQueue) {
    serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
    serverQueue.songs = []
    serverQueue.connection.dispatcher.end();
}
function pause(message, serverQueue) {
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.pause();
}
function resume(message, serverQueue) {
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.resume();
}
function volume(message, serverQueue) {
    if (args[0] > 10) 
      return message.channel
          .send("Je ne peux pas mettre le volume au-dessus de 10 !")
          .then(msg => msg.delete({timeout: 8000}));
    if (args[0]>=7)
      message.channel
          .send("Il est déconseillé de mettre le volume au-dessus de 7 !")
          .then(msg => msg.delete({timeout: 8000}));

    if (!args[0])
      return message.channel
          .send(`Le volume actuel est: **${serverQueue.volume}**`)
          .then(msg => msg.delete({timeout: 8000}));

    serverQueue.volume = args[0];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
    return message.channel
        .send(`J'ai mis le volume à: **${args[0]}**`)
        .then(msg => msg.delete({timeout: 8000}));
}


function liste(message, serverQueue) {
console.log(serverQueue)

    message.channel
    .send(`
      **Playlist:**
    ${serverQueue.songs.map(song => `${song.title}`).join("\n")});
      ___________
      **Musique actuelle:** ${serverQueue.songs[0].title}`)
    .then(msg => msg.delete({timeout: 45000}));
}
    
function play(guild, song) {

  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  
  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel
      .send("Le titre de la vidéo lu est :")
      .then(msg => msg.delete({timeout: 8000})) &&
    serverQueue.textChannel
      .send(`**${song.title}**`)
      .then(msg => msg.delete({timeout: 8000}));
}

};


module.exports.help = {
    name:"musique"
}
 