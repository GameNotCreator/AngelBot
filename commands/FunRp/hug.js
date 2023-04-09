const { MessageEmbed, MessageAttachment } = require("discord.js");
const { LOG } = require('../../config');
module.exports.run = (client, message, args) => {
    const num = (Math.floor(Math.random()* 10)+1).toString();
    const hug = new MessageEmbed()
    .setColor('#FFFFFF')
    .setTitle(message.mentions.members.first() ? `${message.author.username} fait un calin à ${message.mentions.users.first().username}` : `${message.author.username} ** fait un calin à ** Ange |  天使 `)
    .setImage('attachment://' + num + '.gif')
    .setTimestamp()
    .setFooter('Cordialement 悪魔')
    const file = new MessageAttachment('assets/gif/hug/' + num + '.gif');
    message.channel.send({ embed: hug, files: [file] });

    message.delete();

    const huglog = new MessageEmbed()
    .setColor('#FFFFFF')
    .setAuthor(`${message.author.username} (${message.author.id})`)
    .setDescription(`**Action**: ` + message.mentions.members.first() ? `${message.author.username} embrasse ${message.mentions.users.first()}` : `${message.author.username} **embrasse** Ange |  天使 `)
    .setThumbnail(message.author.avatarURL())
    .setTimestamp()
    .setFooter('Cordialement 悪魔')

    const log_channel = client.channels.cache.get(LOG);
    log_channel.send({embed : huglog});
}

module.exports.help = {
    name: "hug",
    aliases: ['hug'],
    description: "Command Rp pour Hug",
    cooldown: 10,
    usage: '<user_mention>',
    category: 'funrp',
    args: false
};