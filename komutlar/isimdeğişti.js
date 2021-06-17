const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js')
const prefix = "?"
 
module.exports = {
    kod: "isimdeğiştir",
    async run (client, message, args) {


      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**İSİM DEĞİŞTİRMEK** İçin yönetici olmalısınız.');
let isim = args.slice(1).join(' ');
let kullanici = message.mentions.users.first();
 
if(!kullanici) {
const embed = new MessageEmbed()
.setColor('RED')
.setTitle('HATA')
.setDescription('Kişiyi Etiketlemelisin!')
message.channel.send(embed)
    }
 
if(!isim) {
  const embed = new MessageEmbed()
.setColor('RED')
.setTitle('HATA')
.setDescription('Kişinin İsmini Yazmalısın');
message.channel.send(embed)
}
 
 
message.guild.members.cache.get(kullanici.id).setNickname(`${isim}`)
  const embed = new MessageEmbed()
  .setColor('GREEN')
  .setTitle('İsim Değiştirildi!')
  .addField('İsmi Değiştirilen', `${kullanici.username}`)
  .addField('Yeni İsmi', `${isim}`)
  .setFooter('İsim Başarıyla Değiştirildi' )
  message.channel.send(embed)
}
 }
