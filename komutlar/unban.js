module.exports = {
    kod: "unban",
    async run (client, message, args) {
        let id = args[0]
        if (!message.member.hasPermission('BAN_MEMBERS')) return;
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return;
        if (isNaN(id)) return message.reply('Lütfen geçerli bir ID giriniz');
        message.guild.fetchBans().then(ban => {
            if (ban.size === 0) return message.reply('Bu sunucu veri tabanında yasaklanan kişi bulunmadı')
            const banlanan = ban.find(b => b.user.id === id)
            if (!banlanan) return message.channel.send('Bu kişinin banı bulunmamakta')
            message.guild.members.unban(banlanan.user)
            message.reply('Etiketlenen kişinin banı kaldırılmıştır')
        })
    }
}