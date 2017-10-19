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
const Notifier = require('twitch-followers');
const notifier = new Notifier('e93dp4sgfuygxxr3vmove61d4gv83u');

notifier.on('follower', user => { console.log(user) });
notifier.start();
