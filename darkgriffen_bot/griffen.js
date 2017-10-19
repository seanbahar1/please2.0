var tmi = require("tmi.js");
var fun = require("./special/megalink.js");
const mega = require('megajs')
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


const file = File.fromURL('https://mega.nz/#F!taJjxCgT!1OkAADCUWBsB4Eb7nOEWxQ')
client.on("message", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;

    // Handle different message types..
    switch (userstate["message-type"]) {
        case "action":
            // This is an action message..

            break;
        case "chat":
            // This is a chat message..
            
            break;
        case "whisper":
            // This is a whisper..

            break;
        default:
            // Something else ?
            break;
    }
});