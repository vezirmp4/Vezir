const Discord = require('discord.js')

module.exports = { 
    kod: "kural-2",
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**KURALLAR** Yapım aşamasındadır lütfen kullanmayınız');
        const embed = new Discord.MessageEmbed()
        .setTitle("Kural 1")
        .setThumbnail('https://cdn.discordapp.com/icons/851739790315356170/e6e82c34933fb7633b0fd307ae60979c.png?size=128')
        .setAuthor('Edit By Valodepo')
        .setColor("RANDOM")
        .addField('Yetkililere Satış, Teknik Sorun vb. harici DMden sorup rahatsız etmek yasaktır. Destek Odaları Açmanız gerekmektedir öyle durumlarda.', [
            '3 Uyarı (BAN)',
        ])
        message.channel.send(embed)
    }
}