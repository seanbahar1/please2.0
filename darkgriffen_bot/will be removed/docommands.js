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

var cd = [];
var cdn = [];
client.on("chat", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;
    var msg = message.split(" ");
    var coms = [];
    var mod_ = false;
    if(userstate['mod'] || userstate["display-name"].toLowerCase() === "darklordgriffen"){mod_ = true}
    fs.readdirSync("./commands").forEach(file => {
        var what = file.split(".txt")
        coms.push(what[0])
    })
    console.log(msg)
    if (msg.length === 1) {//is no one tagged
        if (msg[0].includes("!")) {
            var splited = msg[0].split("!");
            if (coms.indexOf(splited[1]) > -1) {
                var loc = coms.indexOf(splited[1]);
                
                fs.readFile('./commands/' + splited[1] + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    var this1 = data.split(",")
                    console.log(this1)
                    var check = false;
                    if (this1[1] === "mod" && mod_ === true) {
                        var saythis = this1[3].split("(%%)")
                        console.log(saythis[1])
                        client.say(channel, "" + " " + saythis[1])
                    }
                    else if (this1[1] === "mod" && mod_ === false) { }
                    else {
                        if (this1[1] === 'normal') {
                            var where = cdn.indexOf(splited[1])
                            if (mod_ === true) {
                                var saythis = this1[3].split("(%%)");
                                console.log(saythis[1])
                                client.say(channel, "" + saythis[1])
                            }
                            else {
                                if (where < 0) {
                                    var saythis = this1[3].split("(%%)")
                                    console.log(saythis[1])
                                    cdn.push(splited[1]);
                                    cd.push([splited[1], parseInt(this1[2])])
                                    client.say(channel, "" + saythis[1])
                                    console.log("here 1 1")
                                }
                                else if (where > -1 && cd[where][1] === 0) {
                                    var saythis = this1[3].split("(%%)")
                                    console.log(saythis[1])
                                    cdn.push(splited[1]);
                                    cd.push([splited[1], parseInt(this1[2])])
                                    client.say(channel, "" + saythis[1])
                                    console.log("here 1 2")
                                }
                                else if (where > -1 && cd[where][1] !== 0) { console.log("here 1 3") }
                            }
                        }
                    }
                    
                });
               
            }
            else{}
        }
        else{}
    }

    else if (msg.length > 1 && msg[1].includes("@")) {
        if (msg[0].includes("!")) {
            var splited = msg[0].split("!");
            if (coms.indexOf(splited[1]) > -1) {
                var loc = coms.indexOf(splited[1]);

                fs.readFile('./commands/' + splited[1] + ".txt", 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    var this1 = data.split(",")
                    console.log(this1)
                    var check = false;
                    if (this1[1] === "mod" && mod_ === true) {
                        var saythis = this1[3].split("(%%)")
                        console.log(saythis[1])
                        client.say(channel, "" + msg[1] + " " + saythis[1])
                    }
                    else if (this1[1] === "mod" && mod_ === false) { }
                    else {
                        if (this1[1] === 'normal') {
                            var where = cdn.indexOf(splited[1])
                            if (mod_ === true) {
                                var saythis = this1[3].split("(%%)")
                                console.log(saythis[1])
                                client.say(channel, "" + msg[1] + " " + saythis[1])
                            }
                            else {
                                if (where < 0) {
                                    var saythis = this1[3].split("(%%)")
                                    console.log(saythis[1])
                                    cdn.push(splited[1]);
                                    cd.push([splited[1], parseInt(this1[2])])
                                    client.say(channel, "" + msg[1] + " " + saythis[1])
                                    console.log("here 2 1")
                                }
                                else if (where > -1 && cd[where][1] !== 0) { console.log("here 2 3") }

                                else if (where > -1 && cd[where][1] === 0) {
                                    var saythis = this1[3].split("(%%)")
                                    console.log(saythis[1])
                                    cdn.push(splited[1]);
                                    cd.push([splited[1], parseInt(this1[2])])
                                    client.say(channel, "" + msg[1] + " " + saythis[1])
                                    console.log("here 2 2")
                                }
                               
                            }
                        }
                    }

                });

            }
            else { }
        }
        else { } 
    }

});
function onedown() {
    var i = 0; 
    for (i = 0; i < cd.length; i++) {
        if (cd[i][1] > 0) {
            cd[i][1]--
            console.log(cd[i][1])
        }
    }
}
setInterval(function () { onedown() }, 1000);