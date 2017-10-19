var tmi = require("tmi.js");
var anchorme = require("anchorme").default; // if installed via NPM
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
var userscd = [];
var users = [];
client.on("chat", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;
    var ismod = false;
    if (userstate['mod'] === true || userstate['display-name'].toLowerCase() === "darklordgriffen") ismod = true;
    var re = anchorme(message);
    console.log(re);
    if (ismod === true && message.toLowerCase().includes("!permit ")) {
        var that = message.toLowerCase().split(" ", 3);
        var time = 0, name;
        if (that[0] !== "!permit") return;
        var che = that[1].split("@");
        if (users.indexOf(che[1]) > -1 && userscd[users.indexOf(che[1])][1] > 0) { client.say(channel, "user is already permited"); return;}
        function ifnum(num) {
            var n = false;
            if (isNaN(num));
            else n = true;
            return n;
        }
        switch (true) {
            case ifnum(that[2]) === true:
                time += parseInt(that[2]);
                break;
            case ifnum(that[2]) === false:
                time += 30;
                break;
        }; 
        if (true) {
            if (that[1].toLowerCase().includes("@")) {
                var u = that[1].split("@")
                name = u[1];
            }
            else
                name = false;

        };
        if (name === false) {
            client.say(channel , "to !permit : !permit <@username> [optional]<time>(default 30 seconds)")
        }
        else {
            if (users.indexOf(userstate["display-name"]) > -1) {
                var loc = users.indexOf(userstate["display-name"]);
                userscd[loc][1] += time;
            }
            else {
                users.push(name);
                userscd.push([name, time]);
                console.log(userscd)
            }
            client.say(channel,""+name +" was permited for " + time + " sec (post a link to chat and be carful you can still get banned f it against chat rules)");
        }

    }
    if (true) {
        if (re.includes("<a href=") && re.includes("</a>") && ismod === false && users.indexOf(userstate["display-name"].toLowerCase()) < 0) {
            client.say(channel, "/timeout " + userstate['display-name'] + " 1");
            client.say(channel, " you not permited to post links");
            //will purge 
            console.log(users.indexOf(userstate["display-name"].toLowerCase()))
        }
        else if (re.includes("<a href=") && re.includes("</a>") && (ismod === true || users.indexOf(userstate["display-name"].toLowerCase()) >-1 || userscd[users.indexOf(userstate["display-name"].toLowerCase())][1] > 0)) {
            console.log("link was posted");
            

        }
    }
});
client.on("action", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;
    var ismod = false;
    if (userstate['mod'] === true || userstate['display-name'].toLowerCase() === "darklordgriffen") ismod = true;
    var re = anchorme(message);
    console.log(re);
    if (true) {
        if (re.includes("<a href=") && re.includes("</a>") && ismod === false && users.indexOf(userstate["display-name"].toLowerCase()) < 0) {
            client.say(channel, "/timeout " + userstate['display-name'] + " 1");
            client.say(channel, " you not permited to post links");
            //will purge 
            console.log(users.indexOf(userstate["display-name"].toLowerCase()))
        }
        else if (re.includes("<a href=") && re.includes("</a>") && (ismod === true || users.indexOf(userstate["display-name"].toLowerCase()) > -1 || userscd[users.indexOf(userstate["display-name"].toLowerCase())][1] > 0)) {
            console.log("link was posted");


        }
    }
});

setInterval(function () {
    var i = 0;
    for (i = 0; i < users.length; i++) {
        if (userscd[i][1] > 0) {
            userscd[i][1]--;
            console.log(userscd[i][1])
        }
        if (userscd[i][1] === 0) {
            userscd.splice(i, 1);
            users.splice(i, 1);
        }
    }
}, 1000);