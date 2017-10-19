// JavaScript source code
var cmd = require('./forcmdsapi.js');
var tmi = require("tmi.js");
const Discord = require("discord.js");
var fs = require('fs');
var options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "darkgriffen_bot",
        password: "oauth:oexr91zh6l9f8s0nf9frmoxdtojuez"
    },
    channels: ["darklordgriffen"]
}; var client = new tmi.client(options);
client.connect();
const dis = new Discord.Client();
dis.login('MzYxMTQ5Nzc5NjIwOTIxMzQ2.DKf6dA.k4t9647saeef8BPYMDAqw5Gg58E');


client.on("chat", function (channel, userstate, message, self) {
    if (self) return;
    var mod = false;
    if (userstate['mod'] || userstate['display-name'].toLowerCase() === 'darklordgriffen') mod = true;
    if (mod === false) return;
    var that = cmd.info(message);
    if (that.includes("err")) console.log(that);
    else client.say(channel,""+that);
});
dis.on('message', message => {
    console.log("[" + "discord id: " + message.author.username + "]: " + message)
    if (message.author.bot) return;
    var that = cmd.info(message.content);
    if (that.includes('err')) return;
        message.reply(that);
    
})