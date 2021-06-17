module.exports = {
    kod: "oylama",
    async run (client, message, args) {
              const botmesajı = args.join(" ")
              if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**OYLAMA** Yapmak için yönetici olmalısınız.');
              if (!botmesajı) return message.reply('Oylamanın ne olduğunu yazmadın mal.');
              message.delete(message.author)
              const { MessageEmbed } = require ('discord.js')
              const embed = new MessageEmbed()
              .setTitle('OYLAMA')
              .setDescription(botmesajı)
              .setColor('RANDOM')
              .setFooter('By Vezir');
              message.channel.send({ embed: embed }).then( embedMessage => {
                embedMessage.react("✔️")
                embedMessage.react("❌")
              })
            }
        }