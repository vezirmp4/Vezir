module.exports = {
  kod: "ban",
  async run (client, message, args) {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('**BAN** Yapmak için yönetici olmalısınız.');
    const args1 = message.content.split(' ').slice(2)
    const neden = args1.join(" ")
    const { MessageEmbed } = require('discord.js')
      const user = message.mentions.users.first();
  if (user) {
    const member = message.guild.member(user);
    if (member) {
      member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
          const kanal = message.guild.channels.cache.find(ch => ch.name === 'ban-log')
          const embed = new MessageEmbed()
            .setTitle('LOG OLAYI')
            .setDescription('Olay: `BAN`')
            .addField('Kişi:', member)
            .addField('Neden', neden)
            kanal.send(embed)
        })
        .catch(err => {
          message.reply('Bu kişiyi sunucudan banlayamam');
          console.error(err);
        });
    } else {
      message.reply("Etiklenen kişi sunucuda yok!");
    }
  } else {
    message.reply("Kişiyi etiketlemediniz");
  }
}
};