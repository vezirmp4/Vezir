const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
    kod: "reklam-engel",
    async run (client, message, args) {
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**REKLAM ENGEL** Açmak için yönetici olmalısınız.');

  if (!args[0]) return message.channel.send('Hey Bu Ayarı Kullanabilmek için `aç` yada `kapat` yazmalısın!')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    var i = await db.set(`reklam_${message.guild.id}`, 'acik')
   
      message.channel.send('Reklam Engel başarıyla açıldı! `YÖNETİCİ` yetkisine sahip olanların reklamı engellenmicektir.')
    }
  
  if (args[0] == 'kapat') {
    var i = await db.set (`reklam_${message.guild.id}`, 'kapali')
      message.channel.send('Reklam Engel başarıyla kapatıldı! Artık herkes reklam yapabilir.')
    }
} 

}