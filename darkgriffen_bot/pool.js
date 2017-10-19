'use strict';
var tmi = require("tmi.js");

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

var client = new tmi.client(options);
client.connect();

client.on("connected", function (address, port) {
    client.say('darklordgriffen', "pool started ")
});
client.on("disconnected", function (reason) {
    console.log(reason);
});
var on = false;
var opt = [];
var opt1 = [];
var lastres;
client.on("message", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;
    var can = false;
    if (userstate["mod"] || userstate["display-name"].toLowerCase() === "darklordgriffen") { can = true };

    switch (userstate["message-type"]) {
        case "action":

            break;
        case "chat":
            if (message.includes("!startpool") && on === false && can === true) {
                on = true;
                opt = [];
                opt1 = [];
                var make = message.split(" ");
                var i = 1;
                for (i = 1; i < make.length; i++) {
                    opt.push([make[i], 0, i]);
                    opt1.push(make[i])
                }
                
                var u = 0;
                var t = "";
                for (u = 0; u < opt.length; u++) {
                    t += opt[u][0] + " / " + opt[u][2] + ", ";
                }
                client.say(channel, "vote : " + t)
            } 
            if (on === true) {
                if (message.toLowerCase().includes("!vote")) {
                    var msg = message.split(" ");
                    console.log(msg);
                    if (!isNaN(msg[1])) {
                        var loc = parseInt(msg[1]);
                        if (loc > opt.length) { }
                        else {
                            loc--
                            opt[loc][1]++;
                            console.log(loc)
                            console.log(opt)
                        }
                     
                    }
                    else {
                        var loc = opt1.indexOf(msg[1]);
                        var loc1  = opt1.indexOf(msg[1]) + " " ;
                        if ((loc < 0 && loc1 > -1) || (loc >-1 && loc1 < 0) ) { }
                        else {
                            if (loc > -1) {
                                opt[loc][1]++;
                            }
                            else if (loc1 > -1) {
                                opt[loc1][1]++;

                            }

                           
                            console.log(loc)
                            console.log(loc1)
                            console.log(opt)
                        }
                    }
                }
            }
            if (message === "!startpool" && on === true && can === true) { client.say(channel , " a pool is already open")}
            if (message === "!closepool" && on === true && can === true) {
                on = false;

                lastres = opt;
                client.say(channel, "Pool is closed ")
                /* var u = 0;
                 var t = "";
                 
                 for (u = 0; u < opt.length; u++) {
                     t += lastres[u][0] + " = " + lastres[u][1] + ", ";
                 }
                 client.say(channel, "results : "+t)*/
                var tex = last();
                client.say(channel, " " + tex)
            }
            if (message === "!lastpool" && can === true) {


                
                lastres = opt;
               /* var u = 0;
                var t = "";
               
                for (u = 0; u < opt.length; u++) {
                    t += lastres[u][0] + " = " + lastres[u][1] + ", ";
                }
                client.say(channel, "results : " + t)*/

                var tex = last();
                client.say(channel, " " + tex)

            }
            if (message === "disable !pool") {
                client.say(channel, "!closepool")
                process.exit()
            }
            break;
        case "whisper":

            break;
        default:
            // Something else ?
            break;
    }
});

function last() {
    var big = 0;
    
        var g = 0;
        
        var second = [];
        for (g = 0; g < lastres.length; g++) {
            if (lastres[g][1] > big) {
                big = lastres[g][1]; 
                console.log(big + " 1  big");
            }
        }
        console.log(big + "  2 big");
        var asd = "winner/s ";
        var yyy = 0;
        for (yyy = 0; yyy < lastres.length; yyy++) {
            if (lastres[yyy][1] === big) {
                asd += lastres[yyy][0] + " / ";
                console.log(asd + " "+ yyy)
            } 
        }
        asd += " with : " + big + " votes."; 
    
   
  
    
    console.log(asd + " this");
    return asd;
        
    }
    
