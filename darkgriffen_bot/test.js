var tmi = require("tmi.js");
var seansean = require('./New_Command_bot/forcmdsapi.js')
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

client.on("message", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;

    // Handle different message types..
    switch (userstate["message-type"]) {
        case "action":
            // This is an action message..
            break;
        case "chat":
            if (message.includes('!sean_gen ')) {                               //  tests the gen num function
                var msg = message.split(' ');
                //will be !sean_gen start end
                var start = parseInt(msg[1]);                                   //  makes it a num from a string;
                var end = parseInt(msg[2]);                                     //  same as above
                client.say(channel, '' + seansean.gennum(end, start));          //  sendong the message to twitch with the res of the function
            }
                
            break;
        case "whisper":
            // This is a whisper..
            break;
        default:
            // Something else ?
            break;
    }
});