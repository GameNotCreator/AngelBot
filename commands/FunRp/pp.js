const { MessageEmbed } = require("discord.js");
const { LOG } = require('../../config');
const { MessageAttachment } = require("discord.js");
module.exports.run = (client, message, args) => {
    const pp = new MessageEmbed()
    .setColor('#FFFFFF')
    .setTitle(message.mentions.members.first() ? `${message.mentions.users.first().username}` : `${message.author.username}`)
    .setImage(message.mentions.members.first() ? 'https://cdn.discordapp.com/avatars/' + message.mentions.users.first().id + '/' + message.mentions.users.first().avatar + '.png' : 'https://cdn.discordapp.com/avatars/' + message.member.id + '/' + message.author.avatar + '.png')
    .setTimestamp()
    .setFooter('Cordialement 悪魔')
    message.channel.send({ embed: pp});

    message.delete();

    const pplog = new MessageEmbed()
    .setColor('#FFFFFF')
    .setAuthor(`${message.author.username} (${message.author.id})`)
    .setDescription(`**Action**: pp\n**PP de**: ` + message.mentions.members.first() ? `${message.mentions.members.first()}` : `${message.mentions.users.first()}`)
    .setThumbnail(message.author.avatarURL())
    .setTimestamp()
    .setFooter('Cordialement 悪魔')

    const log_channel = client.channels.cache.get(LOG);
    log_channel.send({embed : pplog});
}

module.exports.help = {
    name: "pp",
    aliases: ['pdp'],
    description: "Command Rp pour PP",
    cooldown: 10,
    usage: '<user_mention>',
    category: 'funrp',
    args: false
};