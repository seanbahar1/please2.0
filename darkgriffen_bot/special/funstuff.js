module.exports = {
    d20: function (many, who) {
        var i = 0;
        var nums = "";
        for (i = 0; i < many; i++) {
            var it = Math.floor(Math.random() * 20) + 1;
            nums += it + " ";
        }
        nums = who + " " + nums;
        return nums
    },
    ult: function (mod, cnl, message) {
        var msg = message.split(" ");
        if (msg[0] !== "!ult") return;
        if (msg.length < 2) return;
        if (mod === false) return;
        var heroes = [
            ["DoomFist", " ults and leaps into the air while shouting 'Meteor Strike!' ", 70],
            ["D.Va", "ults and launches her mech and yells 'Nerf This!' ", 60],
            ["McCree", "ults and says 'It's High Noooon.' ", 50],
            ["Pharah", "ults in the air while shounts 'Justice Rains From Above!' ", 60],
            ["Tracer", "ults, tossing her sticky bomb and says 'Looks like you need a timeout!' ", 50],
            ["Bastion", "ults, transforming into his tank form while making a 'Whe - whe - whe - wheee - whee - wheee' sound ", 60],
            ["Mei", "ults, tossing out her drone while saying ‘Freeze! Don’t move!’ ", 40],
            ["Widowmaker", "ults, pulling down her visor while saying ‘No one can hide from my sight.’ and aims her sniper rifle at  ", 30],
            ["Reinhardt", "ults, slamming his hammer down, causing the earth to quake while shouting ‘Hammer down!’ ", 60],
            ["Soldier:76", "ults, turning his tactical visor on and says ‘I’ve got you in my sights.’ ", 70],
            ["Junkrat", "ults, pulling out his riptire and shouting ‘Ladies and gentlemen, start your engines!’ ", 60],
            ["Winston", "ults, causing him to go into a rage while shouting", 30],
            ["Genji", "ults and proceeds to pull out his blade while shouting ‘Ryujin no ken wo kurae!’ ", 80],
            ["Hanzo", "ults and summons a spirit dragon while shouting ‘Ryuu ga waga teki wo kurau!’ ",50],
            ["Zarya ults, shooting out a gravity bomb while saying ‘Ogon po gotovnosti!’ ", 60]
        ];
        var support_or_escape = [
        " Mercy transforming into her Valkyrie form while saying ‘I will watch over you!’ ",
        " Lucio jumping into the air while shouting ‘Let’s break it down!’ and slamming his Sonic Amplifier down, giving everyone a protective shield.",
        " Zenyatta using his transcendence ult while he says ‘Embrace tranquility’ ",
        " Ana tossing her bionic grenade and shooting them with her biotic rifle ",
        " Symmetra throwing down her shield generator and saying ‘Shield generator online.Shield matrix established.’ ",
        "God"
        ];
        var whoattacks = Math.floor(Math.random() * heroes.length);
        var whoSave = Math.floor(Math.random() * support_or_escape.length) ;
        var ser1 = message.split("!ult ");
        var ser2 = ser1[1].toString().replace("," , " ")
        var ser = ser2.split(" ");
        console.log(ser)
        var atv = whoattacks--;
        console.log(atv , "asdasdasd",whoSave)
        
        var what_to_say = { msg1: "" + heroes[atv][0] + " " + heroes[atv][1], msg2: "" + ser + "  in danger", msg3: { killed: {who:[],say:'',}, alive: {who:[],say:'',},}, timeout: [], }
            if (mod === true) {

                var i = 0;
                var results = [];
                for (i = 0; i < ser.length; i++) {
                    var esc = Math.floor(Math.random() * 100) + 1;
                    
                    if (esc > heroes[atv][2]) {
                        var save = whoSave;
                        results.push([ser[i], "was saved by " + support_or_escape[save]]);
                        console.log(support_or_escape[save], "asdasdasdasd")
                        what_to_say.msg3.alive.who.push(ser[i])
                    }
                    else {
                        
                        results.push([ser[i], "was killed by " + heroes[atv][0]]);
                        what_to_say.timeout.push(ser[i]);
                        what_to_say.msg3.killed.who.push(ser[i])
                    }
                }
                var txt = "results: ";
                var u = 0;
                if (true) {
                    if (what_to_say.msg3.killed.who.length <= 0) {
                        what_to_say.msg3.killed.say = false;
                    }
                    else {
                        what_to_say.msg3.killed.say = 'killed by ' + heroes[atv][0];
                    }
                }
                if (true) {
                    if (what_to_say.msg3.alive.who.length <= 0) {
                        what_to_say.msg3.alive.say = false;
                    }
                    else {
                        what_to_say.msg3.alive.say = 'saved by ' + support_or_escape[whoSave];
                    }
                }
               

                console.log(results)
            }
        
        
        return what_to_say;
    },
    uptime: function () {
        var request = require('request');
        var thisis;
        var aa, bb;
        var t = false;
        var it = function () {
            var aaa, bbb;
            var at = false;
            request(

                'https://api.twitch.tv/kraken/streams?client_id=e93dp4sgfuygxxr3vmove61d4gv83u&channel=darklordgriffen'


                , function (error, response, body) {

                    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                    console.log('body:', body); // Print the HTML for the Google homepage.
                    var that = JSON.parse(body);
                    var a = that["streams"][0]["channel"]["updated_at"];
                    var b = that['streams'][0]["created_at"];
                    
                    return aaa = a, bbb = b, at = true;
                       
                  

                   



                });
            while (at === false) { }
            console.log(aaa,bbb)
        return bb = new Date(Date.parse(bbb))
        aa = new Date(Date.parse(aaa)),
             t = true;
        } 
        var itit = it();
        console.log(itit)
        while (t === false) { }
       
       
       var getDuration = function (d1, d2) {
            d3 = new Date(d2 - d1);
            d0 = new Date(0);

            return {
                getHours: function () {
                    return d3.getHours() - d0.getHours();
                },
                getMinutes: function () {
                    return d3.getMinutes() - d0.getMinutes();
                },
                getMilliseconds: function () {
                    return d3.getMilliseconds() - d0.getMilliseconds();
                },
                toString: function () {
                    return this.getHours() + ":" +
                        this.getMinutes() + ":" +
                        this.getMilliseconds();
                },
            };
        }
      console.log(bb,aa);
       // ;
    },
    test: function (num, func) {
        func(num);

    },
    griffen_teach: function (answer_what, func) {
        
    }
};