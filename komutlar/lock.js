const Discord = require('discord.js');
 
module.exports = {
    kod: "lock",
    async run (client, message, args) {

if(!message.member.hasPermission('MANAGE_CHANNELS')) return;

let channel = message.mentions.channels.first() || message.channel;

let reason;
if(!message.mentions.channels.first()) {
if(args[0]) reason = args.slice(0).join(' ');
};
if(message.mentions.channels.first()) {
if(args[1]) reason = args.slice(1).join(' ');
};

let reasonn;
if(!reason) reasonn = '. No reason given.';
if(reason) reasonn = ` for ${reason} reason.`;
message.channel.send(`KANAL Kilitlenmiştir`).then(m => m.delete({timeout: 7000}));

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': true }, 'Kilitleyen'+message.author.tag);
channel.send(new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Kanal Ayarları ile Oynandı')
.setDescription(`Kanal Kitlenmiştir`)
.setTimestamp());

    }
}