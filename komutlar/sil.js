module.exports = {
    kod: "sil",
    async run (client, message, args){
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**SilMEK** İçin yönetici olmalısınız.');
        if (isNaN(args)) return message.reply('Lütfen bir sayı giriniz')
        if (args < 2 || args > 100) return message.reply('Lütfen 2-100 arasında bir sayı giriniz')
        message.channel.bulkDelete(Number(args)) 
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('Mesajlar Silindi')
        .setDescription('Silinen Mesaj Sayısı: ' + args)
        message.channel.send(embed).then(mesaj => {
            setTimeout(function () {
                mesaj.delete()
            }, 5000);   
            })
        }
    }