module.exports = {
    kod: "ping",
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**PİNG** Komutunu kullanmak için yönetici olmalısınız.');
        const { MessageEmbed, Channel } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('PİNG ÖLÇÜLÜYOR')
        .addField('Bot Pingi', client.ws.ping + ' ms')
        .addField('Mesaj Gecikme Süresi', `${Date.now() - message.createdTimestamp} ms`)
        .setColor("RANDOM")
        .setTimestamp()
        message.channel.send(embed)
    }
}