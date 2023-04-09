module.exports.run = (client, message, args) => {
    message.channel.send("Pong!");
}

module.exports.help = {
    name: "ping",
    aliases: ['ping'],
    description: "Renvoie pong!",
    cooldown: 10,
    usage: '<votre_message>',
    hasRole: ['876121829331312661'],
    category: 'autres',
    args: false
};