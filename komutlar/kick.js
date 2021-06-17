module.exports = {
    kod: "kick",
    async run (client, message, args) {
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('**KİCK** Yapmak için yönetici olmalısınız.');
      const args1 = message.content.split(' ').slice(2)
      const neden = args1.join(" ")
      const { MessageEmbed } = require('discord.js')
        const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            const kanal = message.guild.channels.cache.find(ch => ch.name === 'kick-log')
            const embed = new MessageEmbed()
              .setTitle('LOG OLAYI')
              .setDescription('Olay: `KİCK`')
              .addField('Kişi:', member)
              .addField('Neden', neden)
              kanal.send(embed)
          })
          .catch(err => {
            message.reply('Bu kişiyi sunucudan atamam');
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