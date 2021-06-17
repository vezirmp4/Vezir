const { MessageEmbed } = require('discord.js')

module.exports = {
    kod: "öp",
    async run (client, message, args) {
        const embed = new MessageEmbed()
        .setTitle('SENİ SEVİYORUM')
        .setImage('https://i.pinimg.com/originals/8d/a2/6f/8da26fc5415b1e7f35638c3c8e5e24c1.gif')
        .setColor("RANDOM")
        .setFooter('❤💍')
        .setTimestamp()
        message.channel.send(embed)
    }
};
        
    
