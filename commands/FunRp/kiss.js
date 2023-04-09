const { MessageEmbed, MessageAttachment } = require("discord.js");
const { LOG } = require('../../config');
module.exports.run = (client, message, args) => {
    const num = (Math.floor(Math.random()* 10)+1).toString();
    const kiss = new MessageEmbed()
    .setColor('#FFFFFF')
    .setTitle(message.mentions.members.first() ? `${message.author.username} embrasse ${message.mentions.users.first().username}` : `${message.author.username} **embrasse** Ange |  天使  <3`)
    .setImage('attachment://' + num + '.gif')
    .setTimestamp()
    .setFooter('Cordialement 悪魔')
    const file = new MessageAttachment('assets/gif/kiss/' + num + '.gif');
    message.channel.send({ embed: kiss, files: [file] });
    
    message.delete();

    const kisslog = new MessageEmbed()
    .setColor('#FFFFFF')
    .setAuthor(`${message.author.username} (${message.author.id})`)
    .setDescription(`**Action**: ` + message.mentions.members.first() ? `${message.author.username} embrasse ${message.mentions.users.first()}` : `${message.author.username} **embrasse** Ange |  天使 `)
    .setThumbnail(message.author.avatarURL())
    .setTimestamp()
    .setFooter('Cordialement 悪魔')

    const log_channel = client.channels.cache.get(LOG);
    log_channel.send({embed : kisslog});
}

module.exports.help = {
    name: "kiss",
    aliases: ['kiss'],
    description: "Command Rp pour Kiss",
    cooldown: 10,
    usage: '<user_mention>',
    category: 'funrp',
    args: false
};