const { MessageEmbed, MessageAttachment } = require("discord.js");
const discanvas = require('discanvas');
module.exports = async (client, member) => {
    const welcome = await new discanvas.Welcome()
    .setAvatar('https://cdn.discordapp.com/avatars/' + member.id + '/' + member.user.avatar + '.png')
    .setUsername(member.displayName)
    .setDiscriminator(member.user.discriminator)
    .setBackground('BACKGROUND', './assets/mafia.jpg')
    //or : .setBackground('COLOR', '#ff5555')
    .setMainText('Goodbye')
    .setSecondText('Nous comptons actuellement ' + member.guild.memberCount + ' mafieux')
    /*
    .setCircleColor('#ff5555')
    .setMainTextColor('#ff5555')
    .setSecondTextColor('#ff5555')
    .setPseudoColor('#ff5555')
    */
    .toWelcome()

    member.guild.channels.cache.get('876602466836283412').send({ content: 'Au Revoir ' + member.toString(), files: [{ attachment: welcome.toBuffer(), name: 'welcome-' + member.id + '.png' }] });

    const welcomelog = new MessageEmbed()
        .setAuthor(`${member.displayName} (${member.id})`)
        .setColor("#000000")
        .setDescription(`**Action**: Départ d'un membre`)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp()
        .setFooter('Cordialement 悪魔')

        const log_channel = client.channels.cache.get('879668986156040223');
        log_channel.send({ embed : welcomelog });



}