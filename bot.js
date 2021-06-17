const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const client = new Discord.Client() // client tanımalamsı
const { readdirSync } = require('fs'); // tanımlamalar
const { join } = require('path'); // tanımlamalar
const db = require('quick.db');
const ms = require("ms");

client.commands= new Discord.Collection(); // komutları alıyoruz

const prefix = "?"

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}


client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
      msg.channel.send('**HOŞ GELDİN**');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
      msg.channel.send('https://media1.tenor.com/images/e01e09d8e27c7247314b3dd611f47007/tenor.gif?itemid=13912621');
    }
  });


  client.on('message', msg => {
    if (msg.content.toLowerCase() === '?öp') {
      msg.channel.send('<@811727530247061526>, <@836413920460931103> **SİZİ ÖPTÜĞÜĞÜÜÜ**');
    }
  });

  

  client.on('message', message => {
  
    if (message.content.toLowerCase() === '<@&853038118406848562>' || message.content.toLowerCase() === '<@&852805465971621928>' || message.content.toLowerCase() === '<@&852809392038215720>') {
    message.delete()
    message.channel.send(`${message.author}, bu rolü etiketleyemezsin.`).then(message => message.delete(6000)) }
  })

  client.on("message", async  msg => {
    var mayfe = await db.fetch(`reklam_${msg.guild.id}`)
       if (mayfe == 'acik') {
           const birisireklammidedi = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
           if (birisireklammidedi.some(word => msg.content.includes(word))) {
             try {
              if (!msg.member.hasPermission('ADMINISTRATOR')) {
                     msg.delete();
                       return msg.reply('Bu Sunucuda Reklam Engelleme Filtresi Aktiftir. Reklam Yapmana İzin Veremem !').then(msg => msg.delete(3000));
       
   
     msg.delete(3000);                              
   
               }              
             } catch(err) {
               console.log(err);
             }
           }
       }
       else if (mayfe == 'kapali') {
         
       }
       if (!mayfe) return;
     })

  client.on('guildMemberAdd', youthanasia => {
    if (db.has(`isimreklamkoruma.${youthanasia.guild.id}`) && youthanasia.user.username.toLowerCase().replace(/ /g, '').includes('discord.gg')) {
      youthanasia.send('İsminde reklam içerikli bir şey olabileceğinden dolayı seni yasakladım.').catch(err => console.warn('Bir kişiyi reklam içerikli isimden banladım ancak o kişiye mesaj yollayamadım.'));
      youthanasia.ban({ reason: 'Reklam içerikli kullanıcı adı.' });
    };
  });

  client.on('guildMemberUpdate', (rifleman, youthanasia) => {
    if (db.has(`isimreklamkoruma.${youthanasia.guild.id}`) && youthanasia.displayName.toLowerCase().replace(/ /g, '').includes('discord.gg')) {
      youthanasia.send('İsminde reklam içerikli bir şey olabileceğinden dolayı seni yasakladım.').catch(err => console.warn('Bir kişiyi reklam içerikli isimden banladım ancak o kişiye mesaj yollayamadım.'));
      youthanasia.ban({ reason: 'Reklam içerikli kullanıcı adı.' });
    };
  });

  client.on("message", async msg => {
  
  
    const i = await db.fetch(`kufur_${msg.guild.id}`)
       if (i == "acik") {
           const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amkk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
           if (kufur.some(word => msg.content.includes(word))) {
             try {
               if (!msg.member.hasPermission("BAN_MEMBERS")) {
                     msg.delete();
                             
                         return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir.')
               }              
             } catch(err) {
               console.log(err);
             }
           }
       }
       if (!i) return;
   });
   
   client.on("messageUpdate", (oldMessage, newMessage) => {
     
     
    const i = db.fetch(`${oldMessage.guild.id}.kufur`)
       if (i) {
           const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
           if (kufur.some(word => newMessage.content.includes(word))) {
             try {
               if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
                     oldMessage.delete();
                             
                         return oldMessage.reply('Bu Sunucuda Küfür Filtresi Aktiftir.')
               }              
             } catch(err) {
               console.log(err);
             }
           }
       }
       if (!i) return;
   });

  const capsRegex = new RegExp(/[A-Z]/, 'g');

  client.on('messageCreate', async (message) => {
    
      function colorToSigned24Bit(s) {
      return (parseInt(s.substr(1), 16) << 8) / 256;
  }
  
    
    let capslock = db.fetch(`automodcapslock.set_${message.channel.guild.id}`)
    let qwe = db.fetch(`automodcapslock.settings_${message.channel.guild.id}`)
    if(!qwe) {
    return;  
    }
    if (message.member.permission.has("banMembers")) {
      return;
    } else {
        const capsText = message.content.replace(textRegex, '');
      const capsPerc = 1 - (capsText.replace(capsRegex, '').length / capsText.length);
  
      if (capsText.length > capslock && capsPerc > 0.7) {
  
  
    
          if (qwe === 'delete') {
              message.delete(message).catch(() => false);
          }
  
          if (qwe === 'warn') {
              message.channel.createMessage(`<@${message.author.id}>, Fazla Capslock`);
          }
      if(qwe === 'ban') {
  
     await message.channel.guild.banMember(message.author.id, '7', `Fazla Capslock`);
        message.channel.createMessage(`${message.author.mention}, sunucudan **yasaklandı**\nSebep: Fazla Capslock kullanımı`)
      }
      if(qwe === 'kick') {
  
       await message.channel.guild.kickMember(message.author.id, `Fazla Capslock.`);
      }
  if(qwe === 'uyarsil') {
                message.delete(message).catch(() => false);
                message.channel.createMessage(`<@${message.author.id}>, Fazla Capslock.`);
  }
  }
  }  
  });


  client.on('message', message => {
    if(calc(message.content) == message.content && !message.member.hasPermission('ADMINISTRATOR')) return message.delete();
    });
    
    function calc(string) {
      if(string.toUpperCase() == string) {
        return true;
      } else return false;
    };



client.on("error", console.error);

client.on('ready', () => {
    // Oynuyor Kısmı
  
    var actvs = [
        `${prefix}yardım ${client.guilds.cache.size} sunucuyu`,
        `${prefix}yardım ${client.users.cache.size} Kullanıcıyı`, 
        `${prefix}yardım`
    ];
    
    client.user.setActivity('discord.gg/valodepo', { type: 'PLAYING' });
    
  
      console.log ('_________________________________________');
      console.log (`Kullanıcı İsmi     : ${client.user.username}`);
      console.log (`Sunucular          : ${client.guilds.cache.size}`);
      console.log (`Kullanıcılar       : ${client.users.cache.size}`);
      console.log (`Prefix             : ?`);
      console.log (`Durum              : Bot Çevrimiçi!`);
      console.log ('_________________________________________');
    
  });

client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return message.channel.send(`Komut dosyamda **${command}** adlı bir komut bulamadım.`);


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.login('ODU0NDQxMTUwMzE2Njc1MTEz.YMj-VA.Ey8mVVSzZJH0HbNp-CnspXDWx-g')