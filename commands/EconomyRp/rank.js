const { RankCard } = require('discanvas');
const { LOG } = require('../../config');
module.exports.run = async (client, message, args) => {
    const rankcard = await new RankCard()
        .setAvatar(message.mentions.members.first() ? 'https://cdn.discordapp.com/avatars/' + message.mentions.users.first().id + '/' + message.mentions.users.first().avatar + '.png' : 'https://cdn.discordapp.com/avatars/' + message.member.id + '/' + message.author.avatar + '.png')
        .setLevel(1)
        .setCurrentXP(0)
        .setRequiredXP(1000)
        .setProgressBar('#ff5555')
        .setStatus(message.member.presence?.status)
        .setUsername(message.mentions.members.first() ? message.mentions.users.first().username : message.author.username)
        .setDiscriminator(message.mentions.members.first() ? message.mentions.users.first().discriminator : message.author.discriminator)
        .setTop(1)
        .setBackground('BACKGROUND', './assets/mafia.jpg')
        .setSquareOpacity(0.5)
        .setBorderColor('#000000')
        .toCard()

        message.reply({ files: [{ attachment: rankcard.toBuffer(), name: 'rankcard-' + message.member.id + '.png' }] });

        
}
module.exports.help = {
    name: "rank",
    aliases: ['level'],
    description: "Envoie le Level de l'utilisateur",
    cooldown: 10,
    usage: '<user_mention>',
    category: 'economyrp',
    args: false
};
