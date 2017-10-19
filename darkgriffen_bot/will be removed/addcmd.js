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
};
var options2 = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "seanbahar2",
        password: "oauth:sgy0vvc6c6ng9ys812zu1v3zc2wfp3"
    },
    channels: ["darklordgriffen"]
};

var client = new tmi.client(options);
client.connect();
var client1 = new tmi.client(options2);
client1.connect();
const dis = new Discord.Client();

const dis1 = new Discord.Client();
dis.login('MzYxMTQ5Nzc5NjIwOTIxMzQ2.DKf6dA.k4t9647saeef8BPYMDAqw5Gg58E');
dis1.login('MzYzOTc3ODMyNDU3ODMwNDAx.DLJNjQ.bAXUCkMpavVbtenIF43cPau5sK4');
dis.on('ready', () => {
    console.log(`Logged in as ${dis.user.tag}!`);
   
});







client.on("connected", function (address, port) {
    console.log(":D")
});
client1.on("whisper", function (from, userstate, message, self) {
    // Don't listen to my own messages..
    console.log('here')
    if (message.includes("!addcmd")) {
        
        var channel = dis1.channels.find("name", "bot");
       dis1.channels.find("name", "bot").sendMessage(message);
    }
    
});

dis.on('message', message => {
    console.log("[ " + "discord id : " + message.author + " ] : " + message)






    if (message.channel.name === "bot" && message.content.includes("!addcmd ")) {
        //!addcmd !cmd mod/normal delay - what will it say
        var msg = message.content.toLowerCase().split(" ");
        var cmd = message.content.toLowerCase().split(" - ");
        var to = message.guild.channels.find("name", "bot")
        // to.sendMessage(message.author + " " + msg + " " + cmd)
        if (msg[0] === "!addcmd") {
            var command, whocan, time = 0, what_to_say;
            function init(what) {
                var check_f = []; // checks if a command already exist
                fs.readdirSync("./commands").forEach(file => {
                    check_f.push(file)
                })
                var j = false;
                var i = 0;
                if (what.includes("!") === false) { j = true; }
                var newwhat = what.split("!");
                for (i = 0; i < check_f.length; i++) {
                    var hmm = check_f[i].split(".txt")
                    if (newwhat[1] === hmm[0]) {
                        j = true
                    }
                    else {

                    }
                }
                return j;
            }




            switch (true) { // check if the command includes !
                case init(msg[1]) === false:
                    command = msg[1];

                    break;
                case init(msg[1]) === true:
                    command = false;
                    break;
            }
            switch (msg[2]) {// checks if its mod or normal
                case "mod":
                    whocan = "mod";
                    break;
                case "normal":
                    whocan = "normal";
                    break;
                case msg[2] !== "mod" && msg[2] !== "normal":
                    whocan = false;
                    break;
            }
            function ifnum(num) {
                return isNaN(num);
            }
            switch (true) {// checks if time is a num
                case ifnum(msg[3]) === true:
                    time = false;
                    break;
                case ifnum(msg[3]) === false:
                    time += parseInt(msg[3]);
                    break;
            }
            function nothing(what) {
                var i = true;
                if (what === " " || what === null || what === undefined)
                    i = false;
                else
                    i = true;
                return i;
            }
            switch (true) {// checks if what to say is nothing
                case nothing(cmd[1]) === false:
                    what_to_say = false;
                    break;
                case nothing(cmd[1]) === true:
                    what_to_say = cmd[1];
                    break;

            }
            if (true) {
                if (command === false || whocan === false || time === false || what_to_say === false) {
                    to.sendMessage(message.author + " " + "something went wrong please check that you do it like that !addcmd ![cmd] mod/normal delay(if not mod) - what to say")
                }
                else {
                    to.sendMessage(message.author + " " + ":D all good : " + msg[1] + " will now be crated")
                    var name = msg[1].split("!");
                    console.log(command + " test " + name[1])
                    fs.writeFile("./commands/" + name[1] + ".txt", command + "," + whocan + "," + time + ",(%%)" + what_to_say, function (err) {
                        if (err) {
                            return console.log(err);
                        }

                        to.sendMessage("The file was saved!");
                    });
                }
            }

        }
        else {
        }


    }


});
