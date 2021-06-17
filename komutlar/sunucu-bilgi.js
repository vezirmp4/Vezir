module.exports = {
    kod: "sunucu-bilgi",
    async run (client, message, args){
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**SUNUCU BİLGİ** İçin yönetici olmalısınız.');
        const { MessageEmbed } = require('discord.js')
        var guild = message.guild
        var kanallar = guild.channels.cache
        var üyeler = guild.members.cache
        var emojiler = guild.emojis.cache
        var roller = guild.roles.cache
        var embed = new MessageEmbed()
        .setTitle(`${guild.name} Adlı Sunucunun Bilgileri`)
        .setThumbnail(guild.iconURL({dynamic: true}))
        .addField('**TEMEL BİLGİLER**', [
        `**Sunucu Adı:** ${guild.name}`,
        `**Sunucu ID'si:** ${guild.id}`,
        `**Sunucu Sahibi:** <@${guild.owner.id}>`,
        ])
        .addField('**İSTATİSTİKLER**', [
            `**Üye Sayısı:** ${guild.memberCount}`,
            `**İnsan Sayısı:** ${üyeler.filter(üye => !üye.user.bot).size}`,
            `**Bot Sayısı:** ${üyeler.filter(üye => üye.user.bot).size}`,
            `**Rol Sayısı:** ${roller.size}`,
            `**Kanal Sayısı:** ${kanallar.size}`,
            `**Metin Kanalları Sayısı:** ${kanallar.filter(kanal => kanal.type === 'text').size} `,
            `**Ses Kanalları Sayısı:** ${kanallar.filter(kanal => kanal.type === 'voice').size} `,
            `**Katagori Sayısı:** ${kanallar.filter(kanal => kanal.type === 'category').size} `,
        ])
        .setTimestamp()
        message.channel.send(embed)
    }
}