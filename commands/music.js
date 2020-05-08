const ytdl = require('ytdl-core');
const queue = new Map();

module.exports.run = async (bot, message, args) =>{
    message.delete()
    if(!message.member.voice.channel)return message.channel.send("Connecte-toi à un salon vocal !");
    // if(message.guild.me.voice.channel)return message.channel.send("Le bot est déjà connecté à un salon !");
    const validate = await ytdl.validateURL(args[0]);
    if(!validate)return message.channel.send("Le lien n'a pas été trouvé !");

    
    // Vérification
    
    const serverQueue = queue.get(message.guild.id);
    const voiceChannel = message.member.voice.channel;
    const songInfo = await ytdl.getInfo(args[0]);
    const song = {
        title: songInfo.title,
        url: songInfo.video_url,
        };
    
    if (!serverQueue) {
        const queueContruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true,
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
            .send(`:musicale_note: ***${song.title}*** a été ajoutée à la liste d'attente !`)
            .then(msg => msg.delete({timeout: 8000}))
    }

    function play(guild, song){ 
        const serverQueue = queue.get(guild.id);
        if (!song) {
            serverQueue.voiceChannel.leave();
            queue.delete(guild.id);
            message.channel
                .send("Il n'y a plus de musique en attente, je me déconnecte du salon !")
                .then(msg => msg.delete({timeout: 6000}))
            return;
        }
        const dispatcher = serverQueue.connection
            .play(ytdl(song.url))
            .on("finish", () => {
                serverQueue.songs.shift();
                play(guild, serverQueue.songs[0]);
            })
        .on("error", error => console.error(error)
        );
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
        serverQueue.textChannel
            .send(`La vidéo lu est : ***${song.title}***`)
            .then(msg => msg.delete({timeout: 15000}))
    }
};



module.exports.help = {
    name:"m"
} 
// ✅❌:yin_yang: 🎵