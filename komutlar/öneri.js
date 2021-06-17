const Discord = require('discord.js')

module.exports = {
    kod: "öner",
    async run (client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "851573056732266516";
	var channelID = "851573057168212008";
	
	if (!öneri){
		return message.reply("Bir mesaj belirtin! Doğru kullanım: **?öner <mesaj>**");
	} else {
        const embed = new Discord.MessageEmbed()
			.setTimestamp()
			.addField("Eylem:", "Öner")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)
			.setColor("RANDOM")
		
		client.guilds.cache.get(guildID).channels.cache.get(channelID).send(embed)
		message.channel.send("Öneriniz alınmıştır! Teşekkür ederiz.")
	}
    }
}