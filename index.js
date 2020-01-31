const Discord = require('discord.js');
const client = new Discord.Client();

const { Client,RichEmbed} = require("discord.js");
client.login (process.env.TOKEN);


const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
const PREFIX = "!";



client.on("ready", () => {
    console.log("발젭 On");
    client.user.setActivity("발젭 | !명령어")
});


client.on('message', message => {
if (message.author.bot)
return;
let args = message.content.split(" ");
    let poll_args = message.content.substring(PREFIX.length).split(" ");

  
async function dm() {
    const Embed = new RichEmbed()
    if (message.content.toLocaleLowerCase().startsWith("!명령어")) {
        await message.author.send('').catch(error => {
            if (error.message === "Cannot send messages to this user") {
                message.reply("사용자 설정 => 개인정보 보호 및 보호 => 서버 멤버가 보내는 개인 메시지 허용하기에 체크해주세요.")
            }
            else {
                const Embed = {
                    color: 0xAB0000,
                    title: "발젭 봇 명령어",
                    image: {
                        url: 'attachment://dm.jpg'
                    },
                    fields: [
                        {
                            name: "기본 명령어",
                            value: "!소개 !힙합 !와썹 !싸가지 !난최강 !안대 !응애 \n !ㄴㄷㅆ !ㅌㅊㅇ !ㅈㄱㅊㅇ !ㅁㄷㅊㅇ !ㅇㄷㅊㅇ !ㅅㅍㅊㅇ ",
                        },   
                        
                        {
                            name: "발젭 봇 피드백",
                            value: "오류 피드백 및 원하시는 음성 명령어를 추가하시고 싶으시면\n발젭봇 피드백 디스코드 방을 와주세요.\nhttps://discord.gg/SbDwcf",
                        },
                    ]                 
                }
                try {
                if (!poll_args[1]){
                    message.reply("명령어를 DM으로 보내드렸습니다. :slight_smile:");     
                    message.author.send({embed: Embed});
                }}
                catch{}
            }       
        })
    }
}
dm();

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

}
});
