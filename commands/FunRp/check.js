const { MessageEmbed, MessageAttachment } = require("discord.js");
const { LOG } = require('../../config');
module.exports.run = (client, message, args) => {
    const num = (Math.floor(Math.random()* 10)+1).toString();
    const check = new MessageEmbed()
    .setColor('#FFFFFF')
    .setTitle(message.mentions.members.first() ? `${message.author.username} fait un check à ${message.mentions.users.first().username}` : `${message.author.username} **fait un check à** Ange |  天使`)
    .setImage('attachment://' + num + '.gif')
    .setTimestamp()
    .setFooter('Cordialement 悪魔')
    const file = new MessageAttachment('assets/gif/check/' + num + '.gif');
    message.channel.send({ embed: check, files: [file] });

    message.delete();
    
    const checklog = new MessageEmbed()
    .setAuthor(`${message.author.username} (${message.author.id})`)
    .setColor("#FFFFFF")
    .setDescription(`**Action**: ` + message.mentions.members.first() ? `${message.author.username} fait un check à ${message.mentions.users.first()}` : `${message.author.username} **fait un check à** Ange |  天使`)
    .setThumbnail(message.author.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

    const log_channel = client.channels.cache.get(LOG);
    log_channel.send({embed : checklog});
}

module.exports.help = {
    name: "check",
    aliases: ['check'],
    description: "Command Rp pour Check",
    cooldown: 10,
    usage: '<user_mention>',
    category: 'funrp',
    args: false
};