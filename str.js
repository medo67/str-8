const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {


  client.user.setGame( ��� ����ɡ'https://www.twitch.tv/ledom999);
});

const adminprefix = "-";
const devs = ['486701400152342528','486701400152342528'];
client.on('message', message => {
  var argresult = message.content.split(`).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + '����')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(${argresult} �� ����� ������ ����� ��� )
} else 
  if (message.content.startsWith(adminprefix + '���')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(${argresult} : �� ����� ��� ����� ���)
return message.reply("**�� ����� ����� ����� ��� ���� �������� ���� ������ . **");
} else
  if (message.content.startsWith(adminprefix + '�����')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(${argresult} : �� ���� ���� �����);
      } else     
if (message.content.startsWith(adminprefix + '�����')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");//wennnn
    message.channel.sendMessage(�� ����� ����� ����� ���  ${argresult}`)
}
});

client.login("NDg2NzAxNDAwMTUyMzQyNTI4.DxChZQ.PryWLhCrd8SOq1AOvN30zl7oXy4");