var tmi = require("tmi.js");
var fun = require("./special/funstuff.js");
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
var cd = [
    ["!d20", /*cd*/ 0]
    ["!ult" , /*cd*/ 0]

];
client.on("chat", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;

    // Do your stuff.
    var ifmod = false;
    if (userstate['mod'] || userstate['display-name'].toLowerCase() === "darklordgriffen") ifmod = true;
    //lets do this
    if (message.includes("!d20")) 
        d(ifmod , message , userstate['display-name'] , channel); 
    if (message.includes("!ult")) {
     var iii = fun.ult(ifmod, channel, message);
     client.say(channel, "" + iii.msg1);
     client.say(channel, "" + iii.msg2);
     if (true) {
         if (iii.msg3.killed.who.length <= 0) { }
         else {
             client.say(channel, "" + iii.msg3.killed.who + " " + iii.msg3.killed.say )
         }
     }
     if (true) {
         if (iii.msg3.alive.who.length <= 0) { }
         else {
             client.say(channel, "" + iii.msg3.alive.who + " " + iii.msg3.alive.say)
         }
     }
     var i = 0;
     for (i + 0; i < iii.timeout.length; i++) {
         client.say(channel, "/timeout " + iii.timeout[i] + " 30 the ultimate killed you")
         setTimeout(function () {
             //your code to be executed after 1 second
         }, 100);
     }
    }
    if (message === "!upt") {
      client.say(channel,''+ fun.uptime());
    }
    if (message.includes("!test ") && ifmod === true) {
        msg = message.split(" - ");
        fun.test(msg[1], function (num) {
           client.say(channel,""+eval(num));

        })
    }
    
});













// for checks (down)
var d = function (mod, ms, who, channel) {
    var msg = ms.split(" ");
    if (msg[0] !== "!d20") return;
    if (msg.length > 1) {
        if (!isNaN(msg[1]))
            if (parseInt(msg[1]) > 50) {
                client.say(channel, "50 is the max");
                return;
            }
    }
    if (mod === false) {

        console.log(msg);
        if (msg.length > 1 && cd[0][1] === 0) {
            if (!isNaN(msg[1])) {
                var saythis = fun.d20(parseInt(msg[1]), who.toLowerCase()); // is you want to ask something you welcome to do so
                client.say(channel, "" + saythis);
                cd[0][1] += 60;
                console.log("here 1")
            }
            else;
        }
        else if (msg.length === 1 && cd[0][1] === 0) {
            var saythis = fun.d20(1, who)
            client.say(channel, "" + saythis);
            cd[0][1] += 60;
            console.log("here 2")
        }
    }
    else if (mod === true) {
        console.log(msg);
        if (msg.length > 1) {
            if (!isNaN(msg[1])) {
                var saythis = fun.d20(parseInt(msg[1]), who.toLowerCase()); // is you want to ask something you welcome to do so
                client.say(channel, "" + saythis);
                console.log("here 3")
            }
            else;
        }
        else if (msg.length === 1) {
            var saythis = fun.d20(1, who)
            client.say(channel, "" + saythis);
            console.log("here 4")
        }

    }
}
setInterval(function () {//for d20 cd
    if (cd[0][1] > 0) {
        cd[0][1]--;
        console.log(cd[0][1])
    }
    
},1000)