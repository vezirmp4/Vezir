module.exports = {
    kod: "sahip",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('Vezir')
        .setDescription('[İnstagram](https://www.instagram.com/vezir.mp4/)\n[TikTok](https://www.tiktok.com/@vezirmp4?lang=tr-TR&is_copy_url=1&is_from_webapp=v1)')
        .setAuthor('Vezir 07.06.2021 02:35')
        .setColor("RANDOM")
        .setThumbnail('https://yt3.ggpht.com/Af0uFOfHtaGus5HObuSOW_I-qr0k1HgcMWQOkTNDXTT4DzjCPEGMYdX-ZfI8Fkf627lMv3ahgQ=s88-c-k-c0x00ffffff-no-rj')
        .setTimestamp()
        message.channel.send(embed);
    }
}