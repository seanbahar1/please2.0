const Discord = require("discord.js");
const dis = new Discord.Client();
dis.login('MzYxMTQ5Nzc5NjIwOTIxMzQ2.DKf6dA.k4t9647saeef8BPYMDAqw5Gg58E');
var x = 0; 
dis.on('message', message => {
    if (message.author.bot || message.author.username === "sean bahar") return;
    x++
        message.delete(1000); //Supposed to delete message
       // message.channel.send(' HE IS A BRONZE ' + x);
        console.log(message + " DELETERD")
    
    
});
