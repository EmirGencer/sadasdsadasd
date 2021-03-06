module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-500]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} -Sese geç te ayarlayalım !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} -Müzik Çalmıyor açta ayarlayalım !`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - Bi sayı gir bakim !`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 500) return message.channel.send(`${client.emotes.error} - Please enter a valid number (between 1 and 500) !`);

        client.player.setVolume(message, parseInt(args[0]));

        message.channel.send(`${client.emotes.success} - Sesi ayarlıyorumm **${parseInt(args[0])}%** !`);
    },
};