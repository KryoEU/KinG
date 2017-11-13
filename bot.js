const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

bot.on('ready', () => {
    bot.user.setPresence({ game:  { name: '[KinG]', type: 0} });
    console.log("Bot Ready !");

bot.on('message', message => {
    if (message.content === "yo"){
        message.reply("yo");
        console.log('yo écrit');
    }
});


client.login('process.env.BOT_TOKEN');
