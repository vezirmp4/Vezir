module.exports = { 
    kod: "join",
    async run (clien, message, args) {
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**BOTU SESE ÇEKMEK** için yönetici olmalısınız.');
            if (!message.guild) return;
              if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
              } else {
                message.reply('Herhangi bir sesli odaya geçiniz');
              }
            }
    }