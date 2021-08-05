const Discord = require('discord.js')
const client = new Discord.Client();
const ping = require('quickuptime')
let data = {
  httpclient: "got"
}
const Ping = new ping.Client(data)


client.on('ready', ready => {
  Ping.start(true)
  Ping.uniquestartall(true)
  console.log('ready')
})

client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith('$uptime'))return;
  const args = message.content.trim().split(/ +/g);
  if(!args[1])return message.channel.send("`invalid usage!\ncorrect usage - $uptime <url>`");
  if(message.content.startsWith('$uptime'))
   Ping.addurl(args[1])
     Ping.uptime(args[1], 150000 , true) 
      message.channel.send('now this server will be pinged every 2.5min')
});

require('./server');
client.login("token")
