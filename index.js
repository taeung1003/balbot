const Discord = require('discord.js');
const client = new Discord.Client();

const { Client,RichEmbed} = require("discord.js");
client.login (process.env.TOKEN);


const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
const PREFIX = "!";


/*
client.on("ready", () => {
    console.log("발젭 On");
    client.user.setActivity("발젭 | !명령어")
});


client.on('message', message => {
if (message.author.bot)
return;
let args = message.content.split(" ");
    let poll_args = message.content.substring(PREFIX.length).split(" ");

  

if (message.content.toLocaleLowerCase().startsWith("!소개"))
{
    var voiceChannel = message.member.voiceChannel;
   if(voiceChannel != null)
   {        
    
    var voiceChannel = message.member.voiceChannel;
            voiceChannel.join().then(connection => {
                console.log("joined channel");
                const stream = ytdl('https://youtu.be/xze_5aQjIns', { filter : 'audioonly' });
                message.channel.send("안녕하세요, 접니다.")
                const dispatcher = connection.playStream(stream, streamOptions);
                dispatcher.on("end", end => {
                    console.log("left channel");
                    voiceChannel.leave();
                });
            }).catch(err => console.log(err));     

    }
      if (message.member.voiceChannel === message.guild.me.voiceChannel) {
                message.reply("발젭이가 나갔을때 불러주시거나, 채널에 들어와주세요.")
                return false;
            }
}

if (message.content.toLocaleLowerCase().startsWith("!힙합"))
{
    var voiceChannel = message.member.voiceChannel;
   if(voiceChannel != null)
   {        
    
    var voiceChannel = message.member.voiceChannel;
            voiceChannel.join().then(connection => {
                console.log("joined channel");
                const stream = ytdl('https://youtu.be/Jh0ATQLqQ8Y', { filter : 'audioonly' });
                message.channel.send("HE-팝 SHE-팝 이런 쉬ㅍ..")
                const dispatcher = connection.playStream(stream, streamOptions);
                dispatcher.on("end", end => {
                    console.log("left channel");
                    voiceChannel.leave();
                });
            }).catch(err => console.log(err));     

    }
      if (message.member.voiceChannel === message.guild.me.voiceChannel) {
                message.reply("발젭이가 나갔을때 불러주시거나, 채널에 들어와주세요.")
                return false;
            }
}

if (message.content.toLocaleLowerCase().startsWith("!와썹"))
{
    var voiceChannel = message.member.voiceChannel;
   if(voiceChannel != null)
   {        
    
    var voiceChannel = message.member.voiceChannel;
            voiceChannel.join().then(connection => {
                console.log("joined channel");
                const stream = ytdl('https://youtu.be/9y9Lx7f00N8', { filter : 'audioonly' });
                message.channel.send("와썹 잇츠미 ㅎ...")
                const dispatcher = connection.playStream(stream, streamOptions);
                dispatcher.on("end", end => {
                    console.log("left channel");
                    voiceChannel.leave();
                });
            }).catch(err => console.log(err));     

    }
      if (message.member.voiceChannel === message.guild.me.voiceChannel) {
                message.reply("발젭이가 나갔을때 불러주시거나, 채널에 들어와주세요.")
                return false;
            }
}

if (message.content.toLocaleLowerCase().startsWith("!싸가지"))
{
    var voiceChannel = message.member.voiceChannel;
   if(voiceChannel != null)
   {        
    
    var voiceChannel = message.member.voiceChannel;
            voiceChannel.join().then(connection => {
                console.log("joined channel");
                const stream = ytdl('https://youtu.be/3530K3FfVGw', { filter : 'audioonly' });
                message.channel.send("싸가지 없는 색")
                const dispatcher = connection.playStream(stream, streamOptions);
                dispatcher.on("end", end => {
                    console.log("left channel");
                    voiceChannel.leave();
                });
            }).catch(err => console.log(err));     

    }
      if (message.member.voiceChannel === message.guild.me.voiceChannel) {
                message.reply("발젭이가 나갔을때 불러주시거나, 채널에 들어와주세요.")
                return false;
            }
}

if (message.content.toLocaleLowerCase().startsWith("!ㄴㄷㅆ"))
{
    var voiceChannel = message.member.voiceChannel;
   if(voiceChannel != null)
   {        
    
    var voiceChannel = message.member.voiceChannel;
            voiceChannel.join().then(connection => {
                console.log("joined channel");
                const stream = ytdl('https://youtu.be/khUnfeKLYPo', { filter : 'audioonly' });
                message.channel.send("ㄴㄷㅆ!!")
                const dispatcher = connection.playStream(stream, streamOptions);
                dispatcher.on("end", end => {
                    console.log("left channel");
                    voiceChannel.leave();
                });
            }).catch(err => console.log(err));     

    }
      if (message.member.voiceChannel === message.guild.me.voiceChannel) {
                message.reply("발젭이가 나갔을때 불러주시거나, 채널에 들어와주세요.")
                return false;
            }
}

if (message.content.toLocaleLowerCase().startsWith("!난최강"))
{
    var voiceChannel = message.member.voiceChannel;
   if(voiceChannel != null)
   {        
    
    var voiceChannel = message.member.voiceChannel;
            voiceChannel.join().then(connection => {
                console.log("joined channel");
                const stream = ytdl('https://youtu.be/HL0ZJiQXO7g', { filter : 'audioonly' });
                message.channel.send("난 『최강』이다.")
                const dispatcher = connection.playStream(stream, streamOptions);
                dispatcher.on("end", end => {
                    console.log("left channel");
                    voiceChannel.leave();
                });
            }).catch(err => console.log(err));     

    }
      if (message.member.voiceChannel === message.guild.me.voiceChannel) {
                message.reply("발젭이가 나갔을때 불러주시거나, 채널에 들어와주세요.")
                return false;
            }
}

if (message.content.toLocaleLowerCase().startsWith("!ㅌㅊㅇ"))
{
    var voiceChannel = message.member.voiceChannel;
   if(voiceChannel != null)
   {        
    
    var voiceChannel = message.member.voiceChannel;
            voiceChannel.join().then(connection => {
                console.log("joined channel");
                const stream = ytdl('https://youtu.be/UN7t_X5XzjY', { filter : 'audioonly' });
                message.channel.send("ㅌㅊㅇ")
                const dispatcher = connection.playStream(stream, streamOptions);
                dispatcher.on("end", end => {
                    console.log("left channel");
                    voiceChannel.leave();
                });
            }).catch(err => console.log(err));     

    }
      if (message.member.voiceChannel === message.guild.me.voiceChannel) {
                message.reply("발젭이가 나갔을때 불러주시거나, 채널에 들어와주세요.")
                return false;
            }
}

if (message.content.toLocaleLowerCase().startsWith("!ㅈㄱㅊㅇ"))
{
    var voiceChannel = message.member.voiceChannel;
   if(voiceChannel != null)
   {        
    
    var voiceChannel = message.member.voiceChannel;
            voiceChannel.join().then(connection => {
                console.log("joined channel");
                const stream = ytdl('https://youtu.be/Vv6c8wq8CVk', { filter : 'audioonly' });
                message.channel.send("ㅈㄱㅊㅇ")
                const dispatcher = connection.playStream(stream, streamOptions);
                dispatcher.on("end", end => {
                    console.log("left channel");
                    voiceChannel.leave();
                });
            }).catch(err => console.log(err));     

    }
      if (message.member.voiceChannel === message.guild.me.voiceChannel) {
                message.reply("발젭이가 나갔을때 불러주시거나, 채널에 들어와주세요.")
                return false;
            }
}

if (message.content.toLocaleLowerCase().startsWith("!ㅁㄷㅊㅇ"))
{
    var voiceChannel = message.member.voiceChannel;
   if(voiceChannel != null)
   {        
    
    var voiceChannel = message.member.voiceChannel;
            voiceChannel.join().then(connection => {
                console.log("joined channel");
                const stream = ytdl('https://youtu.be/cDyVhviOq8I', { filter : 'audioonly' });
                message.channel.send("ㅁㄷㅊㅇ")
                const dispatcher = connection.playStream(stream, streamOptions);
                dispatcher.on("end", end => {
                    console.log("left channel");
                    voiceChannel.leave();
                });
            }).catch(err => console.log(err));     

    }
      if (message.member.voiceChannel === message.guild.me.voiceChannel) {
                message.reply("발젭이가 나갔을때 불러주시거나, 채널에 들어와주세요.")
                return false;
            }
}

if (message.content.toLocaleLowerCase().startsWith("!ㅇㄷㅊㅇ"))
{
    var voiceChannel = message.member.voiceChannel;
   if(voiceChannel != null)
   {        
    
    var voiceChannel = message.member.voiceChannel;
            voiceChannel.join().then(connection => {
                console.log("joined channel");
                const stream = ytdl('https://youtu.be/X7zIFCiw7EU', { filter : 'audioonly' });
                message.channel.send("ㅇㄷㅊㅇ")
                const dispatcher = connection.playStream(stream, streamOptions);
                dispatcher.on("end", end => {
                    console.log("left channel");
                    voiceChannel.leave();
                });
            }).catch(err => console.log(err));     

    }
      if (message.member.voiceChannel === message.guild.me.voiceChannel) {
                message.reply("발젭이가 나갔을때 불러주시거나, 채널에 들어와주세요.")
                return false;
            }
}

if (message.content.toLocaleLowerCase().startsWith("!ㅅㅍㅊㅇ"))
{
    var voiceChannel = message.member.voiceChannel;
   if(voiceChannel != null)
   {        
    
    var voiceChannel = message.member.voiceChannel;
            voiceChannel.join().then(connection => {
                console.log("joined channel");
                const stream = ytdl('https://youtu.be/fXmXIbSn0Qo', { filter : 'audioonly' });
                message.channel.send("ㅅㅍㅊㅇ")
                const dispatcher = connection.playStream(stream, streamOptions);
                dispatcher.on("end", end => {
                    console.log("left channel");
                    voiceChannel.leave();
                });
            }).catch(err => console.log(err));     

    }
      if (message.member.voiceChannel === message.guild.me.voiceChannel) {
                message.reply("발젭이가 나갔을때 불러주시거나, 채널에 들어와주세요.")
                return false;
            }
}

if (message.content.toLocaleLowerCase().startsWith("!응애"))
{
    var voiceChannel = message.member.voiceChannel;
   if(voiceChannel != null)
   {        
    
    var voiceChannel = message.member.voiceChannel;
            voiceChannel.join().then(connection => {
                console.log("joined channel");
                const stream = ytdl('https://youtu.be/19or726I9gU', { filter : 'audioonly' });
                message.channel.send("『 응 애. 』")
                const dispatcher = connection.playStream(stream, streamOptions);
                dispatcher.on("end", end => {
                    console.log("left channel");
                    voiceChannel.leave();
                });
            }).catch(err => console.log(err));     

    }
      if (message.member.voiceChannel === message.guild.me.voiceChannel) {
                message.reply("발젭이가 나갔을때 불러주시거나, 채널에 들어와주세요.")
                return false;
            }
}

if (message.content.toLocaleLowerCase().startsWith("!안대"))
{
    var voiceChannel = message.member.voiceChannel;
   if(voiceChannel != null)
   {        
    
    var voiceChannel = message.member.voiceChannel;
            voiceChannel.join().then(connection => {
                console.log("joined channel");
                const stream = ytdl('https://youtu.be/Q0amUzY3DWI', { filter : 'audioonly' });
                message.channel.send("안대애애애앵~.")
                const dispatcher = connection.playStream(stream, streamOptions);
                dispatcher.on("end", end => {
                    console.log("left channel");
                    voiceChannel.leave();
                });
            }).catch(err => console.log(err));     

    }
      if (message.member.voiceChannel === message.guild.me.voiceChannel) {
                message.reply("발젭이가 나갔을때 불러주시거나, 채널에 들어와주세요.")
                return false;
            }
*/
}
});
