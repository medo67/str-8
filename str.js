const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {


  client.user.setGame( ÓäÉ ÓÚíÏÉ¡'https://www.twitch.tv/ledom999);
});

const adminprefix = "-";
const devs = ['486701400152342528','486701400152342528'];
client.on('message', message => {
  var argresult = message.content.split(`).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'ÈáÇí')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(${argresult} Êã ÊÛííÑ ÈáÇíäŞ ÇáÈæÊ Åáì )
} else 
  if (message.content.startsWith(adminprefix + 'äíã')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(${argresult} : Êã ÊÛííÑ ÃÓã ÇáÈæÊ Åáì)
return message.reply("**áÇ íãßäß ÊÛííÑ ÇáÇÓã íÌÈ Úáíß ÇáÇäÊÙÂÑ áãÏÉ ÓÇÚÊíä . **");
} else
  if (message.content.startsWith(adminprefix + 'ÇİÊÇÑ')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(${argresult} : Êã ÊÛíÑ ÕæÑÉ ÇáÈæÊ);
      } else     
if (message.content.startsWith(adminprefix + 'ÓÊÑíã')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");//wennnn
    message.channel.sendMessage(Êã ÊÛííÑ ÊæíÊÔ ÇáÈæÊ Åáì  ${argresult}`)
}
});

client.login("NDg2NzAxNDAwMTUyMzQyNTI4.DxChZQ.PryWLhCrd8SOq1AOvN30zl7oXy4");