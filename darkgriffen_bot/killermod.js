var tmi = require("tmi.js");
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

var client = new tmi.client(options);
client.connect();


client.on("chat", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;

    // Do your stuff.
    ban(userstate['display-name'],message,channel)
           
});
client.on("action", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;

    // Do your stuff.
    ban(userstate['display-name'], message, channel)
});

function ban(who, msg, cnl) {
    var checks = [];
    fs.readdirSync("./words").forEach(file => {
        checks.push(file);
    })
    var i = 0,time=0,ifban=false,ifpurge=false; 
    for (i = 0; i < checks.length; i++) {
        var che = checks[i].split(".txt");
        console.log(che[0]);

        if (msg.toLowerCase().includes(che[0])) { // gets file data;
            var what = [];
            function sean(fi) {
               
                fs.readFile('./words/' + fi + ".txt", 'utf8', function (err, data) {
                    var banned=false,purged=false;
                    var splited;
                    splited = data.split(",");
                    console.log(splited)
                    var fortime = splited[0].split(":")
                    time += parseInt(fortime[1]);
                    console.log(time + " wime ")
                    client.timeout(cnl, who, time, "reason");
                    console.log(time)
                    if (splited[1] === "kind:ban") {
                        ifban = banned = true

                    }
                    if (splited[1] === "kind:purge") {
                        ifpurge = purged = true;
                    }
                    if (ifban === true) {
                        client.ban(cnl, who, "message got mega (reason) : mega flagged");

                    } else if (ifban === false && ifpurge === true && time ===0) {
                        client.timeout(cnl, who, 1, " it got flagged");
                    } 
                });

            }
            
           sean(che[0])
           

            
        }
    }
    
}

