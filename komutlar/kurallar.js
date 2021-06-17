module.exports = { 
    kod: "kurallar",
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**KURALLAR** Yapım aşamasındadır lütfen kullanmayınız');
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle("Kurallar")
        .setThumbnail('https://cdn.discordapp.com/icons/851739790315356170/e6e82c34933fb7633b0fd307ae60979c.png?size=128')
        .setAuthor('Edit By Valodepo')
        .setColor("RANDOM")
        .addField('Yetkilileri Etiketlemek Kesinlikle Yasaktır', [
            '3 Uyarı (Mute)',
        ])
        .addField('VIPleri Etiketlemek De Yasaktır.', [
            `3 Uyarı (Mute)`,
        ])
        .addField('Herhangi bir reklam yasaktır.', [
            'BAN',
        ])
        .addField('Caps lock, Spam, Flood Yapmak Tamamen Yasaktır.', [
            '2 Uyarı (Mute)',
        ])
        .addField('+18 cinsel içerik, kan, vahşet, jump scare içeren fotoğraf, video paylaşımı yasaktır', [
            '1 Uyarı (BAN)',
        ])
        .addField('Sunucu içerisinde olay çıkartmak, üyeleri kışkırtmak ve kaos yaratmak yasaktır', [
            'BAN',
        ])
        .addField('Kişisel olaylarınızı sunucuya yansıtmak yasaktır', [
            '2 Uyarı (BAN)',
        ])
        .addField('Yetkililere Satış, Teknik Sorun vb. harici DMden sorup rahatsız etmek yasaktır. Destek Odaları Açmanız gerekmektedir öyle durumlarda.', [
            '3 Uyarı (BAN)',
        ])
        .addField('NOT', [
            `-Her Kural Yazılı Olmak Zorunda Değildir. Ahlak sınırlarını aşan her türlü davranış karşılığını bulur.\n-Yetkililerden ceza istemeyin komik değil.\n-Herkes Kuralları Okumuş Sayılıp Kurallara Uymak Zorundadır.`,
        ])
        .setTimestamp()
        message.channel.send(embed)
    }
}