const Discord = require('discord.js')

module.exports = { 
    kod: "kural-2",
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**KURALLAR** Yapım aşamasındadır lütfen kullanmayınız');
        const embed = new Discord.MessageEmbed()
        .setTitle("Kural 2")
        .setThumbnail('https://cdn.discordapp.com/icons/851739790315356170/e6e82c34933fb7633b0fd307ae60979c.png?size=128')
        .setAuthor('Edit By Valodepo')
        .setColor("RANDOM")
        .addField('VIPleri Etiketlemek De Yasaktır', [
            '3 Uyarı (Mute)',
        ])
        message.channel.send(embed)
    }
}