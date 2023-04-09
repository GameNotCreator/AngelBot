const { MessageEmbed, MessageAttachment } = require("discord.js");
const discanvas = require('discanvas');
module.exports = async (client, member) => {
    const welcome = await new discanvas.Welcome()
    .setAvatar('https://cdn.discordapp.com/avatars/' + member.id + '/' + member.user.avatar + '.png')
    .setUsername(member.displayName)
    .setDiscriminator(member.user.discriminator)
    .setBackground('BACKGROUND', './assets/mafia.jpg')
    //or : .setBackground('COLOR', '#ff5555')
    .setMainText('Welcome')
    .setSecondText('Nous comptons actuellement ' + member.guild.memberCount + ' mafieux')
    /*
    .setCircleColor('#ff5555')
    .setMainTextColor('#ff5555')
    .setSecondTextColor('#ff5555')
    .setPseudoColor('#ff5555')
    */
    .toWelcome()

    member.guild.channels.cache.get('876602466836283412').send({ content: 'Bienvenue ' + member.toString(), files: [{ attachment: welcome.toBuffer(), name: 'welcome-' + member.id + '.png' }] });

    
}