const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

bot.on('ready', () => {
    bot.user.setPresence({ game:  { name: '[KinG]', type: 0} });
    console.log("Bot Ready !");
});

client.login('process.env.BOT_TOKEN');
