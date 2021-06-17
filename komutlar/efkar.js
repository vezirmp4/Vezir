const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

module.exports = {
    kod: "efkar",
    async run (client, message, args) {
      
    const random = Math.floor(Math.random() * 100) + 1
    const embed = new MessageEmbed()
              .setTitle('EFKAR ÖLÇER')
              .setImage('http://galeri.netfotograf.com/images/medium/2F06555A2F047D8F.jpg')
              .setDescription(`Efkarınız %${random} Efkar`)
              .setColor("RANDOM")
              .setTimestamp()
              message.channel.send(embed)
   } 
}