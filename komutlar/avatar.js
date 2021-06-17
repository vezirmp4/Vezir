module.exports = {
    kod: "avatar",
    async run (clinet, message, args) {
        const { MessageEmbed } = require ('discord.js')
        const user = message.mentions.users.first()
        if (user) {
            const embed = new MessageEmbed()
            .setTitle('Avatar')
            .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
            .setTimestamp()
            message.channel.send(embed)
        } else { 
            const embed = new MessageEmbed()
            .setTitle('Avatar')
            .setImage(message.author.displayAvatarURL({ dynamic: true, size: 4096 }))
            .setTimestamp()
            message.channel.send(embed)
        }
    }
}