const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    kod: "güzelsözler",
    async run (client,message, args){


let sozler = [ 'İnsan sevgiye hükmeder; ama aşk insana hükmeder. - **İskender Pala**' , 'Bir kadın söyleyeceği çok şey olduğu halde susuyorsa, erkek artık tüm şansını kaybetmiştir. - **Pablo Neruda**' , 'Gitsem kalmalar saldırıyor, kalsam gitmeler çağırıyor! - **Kahraman Tazeoğlu**' , 'Mutluluğum belki de şundan ileri geliyor: Bende olanlara seviniyor, olmayanların üzerine de düşmüyorum. - **Lev Nikolayeviç Tolstoy**']; //İstediğiniz Kadar Arttırabilirsiniz-

const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Güzel Bir Söz!")
    .setDescription(sozler[Math.floor(Math.random() * sozler.length)])
    message.channel.send(embed)
  }
}
