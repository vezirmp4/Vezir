module.exports= {
    kod: "slowmode",
    async run (client, message, args) {
        const ms = require('rhino-ms')
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**SLOWMODE** ayarlamak için yönetici olmalısınız.');
        const zaman = ms(args.join(" "), {birim: "saniye"})
        if (zaman > 216000 || zaman < 1) return message.channel.send('Lütfen 1 saniye ile 6 saat arasında bir değer giriniz')
        const slowmode = Math.floor(zaman)
        message.channel.setRateLimitPerUser(slowmode)
        message.channel.send('Bu kanalın slowmode ayarları ile oynandı')
    }
    }