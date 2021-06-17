const { MessageAttachment } = require("discord.js")

module.exports = {
    kod: "duyuru",
    async run (client, message, args) {
        const botmesajı = args.join(" ")
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**DUYURU** Yapmak için yönetici olmalısınız.');
        if (!botmesajı) return message.reply('Duyurunun ne olacağını yazmadınız');
        message.delete(message.author)
        message.channel.send(botmesajı);
    }
}