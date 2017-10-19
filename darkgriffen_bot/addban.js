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

client.on("whisper", function (from, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;

    // Do your stuff.

    if (userstate['display-name'].toLowerCase() === "darklordgriffen" || userstate['display-name'].toLowerCase() ==="seanbahar1") {
        if (message.toLowerCase().includes("!addword ")) {
            var stuff = message.toLowerCase().split(" ")
            var banout = message.toLowerCase().split(" - ")
            var time = 0, ifban = "", percent = 0, exist = false , whattoban = "";
            if (stuff[0] === "!addword") {
                if (true) { //timeout time
                    if (isNaN(stuff[1])) {
                        time = false;;
                    }
                    else {
                        time = parseInt(stuff[1]);
                        
                    }
                    
                }
                if (true) { //if ban timeout or purge
                    if (!isNaN(stuff[2]) || (stuff[2] !== "ban" && stuff[2] !== "purge" && stuff[2] !=="timeout")) {
                        ifban = false;
                        
                    }
                    else {
                        ifban = stuff[2];
                        
                    }
                }
                if (true) {//percent
                    if (isNaN(stuff[3])) {
                        percent = false;
                    }
                    else {
                        if (parseInt(stuff[3]) > 100 || parseInt(stuff[3]) < 1) {
                            percent = false;
                        }
                        else {
                            percent = parseInt(stuff[3]);
                           
                        }
                    }
                }
                if (true) {// stuff
                    if (banout[1] !== (null || undefined || " ")) {
                        var files1 = [];
                        fs.readdir("./words", (err, files) => {
                            var i = 0;
                            for (i = 0; i < files.length; i++) {
                                if (banout[1] + ".txt" === files[i]) {
                                    
                                    exist = true;
                                    whattoban = false;
                                }
                            }

                            if (exist) { }
                            else {
                               
                                whattoban = banout[1];
                            }


                        })

                    }
                    
                    else {
                         
                        client.say(from, "ban:2 " + banout[1])
                    }
                }
                if (true) {
                    if (exist || time === false || ifban === false || percent === false || whattoban === false) {
                        client.say(from, "/w " + userstate['display-name'] + " like that : !addword time(sec) ban/timeout/purge percent(1-100) - theword  ***** or already exist")
                    }
                    else {
                        fs.writeFile("./words/" + banout[1] +".txt", "time:" + time+","+"kind:"+ifban+",percent:"+percent, function (err) {
                            if (err) {
                                return console.log(err);
                            }

                            console.log("The file was saved!");
                        }); 
                        client.say(from, "/w " + userstate['display-name'] + "  was created :D " )
                    }

                }
            }
        }
    }



});